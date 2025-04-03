import React,{useState,useContext} from 'react'
import {Link,useNavigate} from "react-router-dom"
import './SignUp.css'
import { StoreContext } from '../../Context/StoreContext'
const SignUp = () => {
    const navigate = useNavigate()
    const{token,setToken} =useContext(StoreContext)
    const[item,setItem] =useState("");
    
         const url = "http://localhost:4000"
        const[data,setData] =useState({
            email:"",
            password:""
        })
        const handleChange=(event)=>{
            const name =event.target.name;
            const value = event.target.value;
            setData((data)=>({...data,[name]:value}))
        }
        const handleSubmit=async (event)=>{
            event.preventDefault();
                try{
                const response = await axios.post(`${url}/api/user/login`,data,{
                        headers: { "Content-Type": "application/json" }}
                );
                if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token);
                setData({
                    email:"",
                    password:"" 
                })
                toast.success("Logged in successfully")
                navigate("/")
                }else{
                    toast.error(response.data.message)
                } }catch (error) {
                console.error("Login Error:", error.response?.data || error.message);
            }
        }
  return (
    
        <div className='admin'>
        <form className="admin-content" onSubmit={handleSubmit} >
            <div className = "login-title">
                <h2>Login</h2>
                
            </div>
            <div className="login-input">
                <input type="email"  name="email" onChange={handleChange} value={data.email} placeholder='Enter email' required/>
                <input type="password" name="password" onChange = {handleChange}  value={data.password} placeholder='Enter password' required/>
            </div>
            <button className='login-button'>Sign Up</button>
            <div className="login-check">
                <input type="checkbox" required/>
                <p>By continuing ,I agree to the terms and condition</p>
                </div>
        
               
                <Link to="/signUp"><p>Create a new account? <span>Click here</span></p></Link>
               
                
                
        </form>
    
      
    </div>
  )
}

export default SignUp
