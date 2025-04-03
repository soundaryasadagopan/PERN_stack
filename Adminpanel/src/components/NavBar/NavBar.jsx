import React from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
     <h2 className='logo'>Zarooz</h2>
    <Link to="/"><img src={assets.woman}  className ="profile" alt =""/></Link>

  </div>
  )
}

export default NavBar
