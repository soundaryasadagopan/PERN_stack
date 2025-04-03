import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
    <div className = "sidebar-options">
      <NavLink to="/AddProduct" className='sidebar-option'>
        <img src={assets.add_icon} alt=""/>
        <p>Add Items</p>
      </NavLink>

      <NavLink to="/ProductList" className='sidebar-option'>
        <img src={assets.add_icon}  alt=""/>
        <p>Product List</p>
      </NavLink>

    </div>
    
      
    </div>
  )
}

export default SideBar
