import React ,{useState,useContext}from 'react'
import './NavBar.css'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("Home");
    
    
  return (
    <div className='navbar'>
      <h2 className='logo'>Zarooz</h2>
      <ul className='navbar-menu'>
          <Link to='/' onClick = {()=>setMenu("Home")} className={menu ==="Home"?"active":" "} >Home</Link>
          <a href="#Expore" onClick = {()=>setMenu("menu")} className={menu ==="menu"?"active":" "}>menu</a>
         
        </ul>
        <div className='navbar-right'>
          <img src={assets.bag_icon} alt =""/>
          <div className='navbar-basket-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt = ""/></Link>
            <div className='dot' />
          </div>
          <Link to="/userLogin"><button >signin</button></Link>
        </div>
      </div>
      
    
  )
}

export default NavBar
