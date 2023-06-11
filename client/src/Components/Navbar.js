import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return ( 
  <nav className='navi'>
    <div className='navigation'>
      <NavLink to="/" className='cont'>Home</NavLink> 
      <NavLink to="/all" className='cont'>All Users</NavLink>
      <NavLink to="/add" className='cont'>Add User</NavLink>
    </div>
  </nav>
  )
}

export default Navbar