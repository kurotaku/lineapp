import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import CustomerRoutes from './pages/customer/CustomerRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/customer/*" element={<CustomerRoutes />} />
    </Routes>
  )
}

export default AppRoutes
