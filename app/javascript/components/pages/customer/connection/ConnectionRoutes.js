import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import New from './New'

const ConnectionRoutes = () => {
  return (
    <Routes>
      <Route exact path="/new" element ={<New />} />
    </Routes>
  )
}

export default ConnectionRoutes
