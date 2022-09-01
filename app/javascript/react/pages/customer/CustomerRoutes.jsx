import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Show from './Show'
import Search from './Search'

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element ={<Show />} />
      <Route exact path="/search" element ={<Search />} />
    </Routes>
  )
}

export default CustomerRoutes
