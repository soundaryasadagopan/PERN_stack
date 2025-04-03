import React from 'react'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Cart from './pages/Cart/Cart'
import UserLogin from './components/userLogin/userLogin'
import {Routes,Route,useLocation} from 'react-router-dom'
import SignUp from './components/userLogin/SignUp'
const App = () => {
  const location = useLocation();
  const hideNavbarOn = ['/userLogin'];

  return (
    <>

    
    <NavBar/>
    
    <div className='app'>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/userLogin" element={<UserLogin/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
    </>
  )
}

export default App
