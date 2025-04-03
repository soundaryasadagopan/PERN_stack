import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes,Route,useLocation } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import ProductList from './pages/ProductList/ProductList';
import AddProduct from './pages/AddProduct/AddProduct';
import SideBar from './components/SideBar/SideBar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const location = useLocation();
  const hideNavbarOn = ['/'];
  const url = "http://localhost:4000";
  const[token,setToken] =useState("")
  const allowedRoutes = ["/ProductList","/AddProduct"];
  return (
    <>
    <div>
     <ToastContainer/>
    {location && !hideNavbarOn.includes(location.pathname) && 
    
    <NavBar/>
    }
    <hr/>
    {allowedRoutes.includes(location.pathname)?(
      <div className='app-content'>
      {location && !hideNavbarOn.includes(location.pathname) &&  <SideBar/>}
      <Routes>
            <Route path ='/ProductList' element={<ProductList url={url} />}/>
            <Route path ='/AddProduct' element={<AddProduct url={url} />}/>

      </Routes>
      </div>):
      (
        <Routes>
            <Route path ='/' element={<AdminLogin url={url} token={token} setToken ={setToken}/>}/>
            </Routes> 
      )}
      
    </div>
    </>
  )
}

export default App
