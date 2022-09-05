import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import DefaultLayout from './components/layouts/DefaultLayout'
import Home from './pages/home'
import CustomerRoutes from './pages/customer/CustomerRoutes'
import BookingRoutes from './pages/bookings/BookingRoutes'
import CouponsRoutes from './pages/coupons/CouponsRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coupons/*" element={<CouponsRoutes />} />
        <Route exact path="/bookings/*" element={<BookingRoutes />} />
        <Route exact path="/customer/*" element={<CustomerRoutes />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
