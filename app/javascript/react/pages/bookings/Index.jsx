import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import Calendar from 'react-calendar';
import { Container } from '../../components/uiParts/column/Container'
import styled, { createGlobalStyle } from 'styled-components';
import * as Form from '../../components/uiParts/form/Form'
import { PrimarySubmit } from '../../components/uiParts/button/Button';
import { useAccountContext } from '../../context/AccountContext'
import Color from '../../const/Color';
import { BoxRounded } from '../../components/uiParts/box/Box';

const CalenderStyle = createGlobalStyle`
  .react-calendar{
    margin-bottom: 32px;
  }
  .react-calendar__navigation{
    display: flex;
    justify-content: space-between;
  }
  .react-calendar__navigation__label__labelText{
    font-weight: bold;
    font-size: 1.4rem;
  }
  .react-calendar{
    text-align: center;
  }
  abbr{
    width: 42px;
    height: 42px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .react-calendar__tile--active{
    abbr{
      background-color: ${Color.PRIMARY};
      color: white;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth{
    opacity: .3;
  }
  .react-calendar__month-view__weekdays{
    font-weight: bold;
    font-size: 1.4rem;
    abbr{
      text-decoration: none;
    }
  }
`

const BookingText = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
`

const OptionList = ({start, end, offset}) => {
  const options = [];
  for(var i = parseInt(start); i <= parseInt(end); i += parseInt(offset)){
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
}

const Index = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);

  const { account } = useAccountContext();

  const formatDate = (date) => {
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
  }

  const fetchBookings = () => {
    axios.get('/api/private/bookings', {params: {line_account_id: account.id}})
    .then((resp) => {
      setBookings(resp.data);
    });
  }
  
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm();
  
  const onSubmit = (formData) => {
    var params = {
      start_at: formatDate(bookingDate) + ' ' + formData.hour + ':' + (0 + formData.minute).slice(-2),
      line_account_id: account.id
    };
    axios.post('/api/private/bookings', {booking: params})
    .then(resp => {
      fetchBookings();
    })
  }

  useEffect(() => {
    if(!account) return;
    fetchBookings();
  }, [account]);

  return (
    <Container>
      {bookings.map(booking => {
        return(
          <BoxRounded key={booking.id}>
            <BookingText>
              {booking.display_start_at}〜
            </BookingText>
          </BoxRounded>
        )
      })}
      <Form.DefaultFormStyle />
      <CalenderStyle />
      <Calendar
        locale="ja-JP"
        onChange={setBookingDate}
        value={bookingDate}
        formatDay={(locale, date) =>{
          return date.getDate();
        }}
        next2Label={false}
        prev2Label={false}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.FormGroup>
          <select
            {...register("hour")}
            onChange={(e) => setValue('select', e.target.value, { shouldValidate: true })}
          >
            <OptionList start="10" end="20" offset="1" />
          </select>
        </Form.FormGroup>
        
        <Form.FormGroup>
          <select
            {...register("minute")}
            onChange={(e) => setValue('select', e.target.value, { shouldValidate: true })}
          >
            <OptionList start="0" end="45" offset="15" />
          </select>
        </Form.FormGroup>

        <div style={{textAlign: 'center'}}><PrimarySubmit type="submit" value="予約する" /></div>
      </form>
    </Container>
  )
}

export default Index
