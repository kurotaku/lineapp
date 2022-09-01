import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAccountContext } from '../../../context/AccountContext';
import { Container } from '../../uiParts/column/Container';
import { BoxRounded } from '../../uiParts/box/Box';
import * as Form from '../../uiParts/form/Form'
import { PrimarySubmit } from '../../uiParts/button/Button';

const Search = (props) => {
  const {account, setAccount} = useAccountContext();
  const navigate = useNavigate();
  const schema = yup.object().required().shape(
    {
      number: yup.string().required('必須項目です'),
      phone: yup.string().required('必須項目です'),
    }
  )
  const {
    register,
    handleSubmit,
    formState: { errors}
  } = useForm({ resolver: yupResolver(schema)});

  const onSubmit = (formData) => {
    var params = {
      number: formData.number,
      phone: formData.phone
    };

    axios.get('/api/private/customers', {params: params})
    .then(resp => {
      if (resp.data.length == 1){
        axios.patch('/api/private/line_accounts/' + account.id, {line_account: {customer_id: resp.data[0].id}})
        .then(resp => {
          setAccount(resp.data);
          navigate('../');
        })
        
      }
    })
    .catch(e => {
      console.log(e);
    });
  }
  
  return (
    <Container>
      <BoxRounded>
        <Form.DefaultFormStyle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.FormGroup label="会員番号">
            <input type="text" {...register('number')} placeholder="数字11桁" />
            {errors.number && <Form.FieldErrorMessage>{errors.number.message}</Form.FieldErrorMessage>}
          </Form.FormGroup>

          <Form.FormGroup label="電話番号">
            <input type="text" {...register('phone')} placeholder="09012345678" />
            {errors.phone && <Form.FieldErrorMessage>{errors.phone.message}</Form.FieldErrorMessage>}
          </Form.FormGroup>

          <div style={{textAlign: 'center'}}><PrimarySubmit type="submit" value="検索" /></div>
        </form>
      </BoxRounded>
    </Container>
  )
}

export default Search
