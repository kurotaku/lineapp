import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import ConnectionRoutes from './pages/customer/connection/ConnectionRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/customer/connection/*" element={<ConnectionRoutes />} />
    </Routes>
  )
}

export default AppRoutes
