import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/customer/connection/new">会員証登録</NavLink>
      </li>
    </ul>
  )
}

export default Navigation
