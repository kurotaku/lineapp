import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './Index'

const CouponsRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element ={<Index />} />
    </Routes>
  )
}

export default CouponsRoutes
