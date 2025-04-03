import React,{useState,useEffect} from 'react'
import { assets } from '../../assets/assets';
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

const AdminLogin = ({url,token,setToken}) => {
    const navigate = useNavigate()
    const[currentState,setCurrentState] = useState("Login");
    const[item,setItem] =useState("");
    
    const[data,setData] =useState({
        name:"",
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
        let newUrl=url ;
        if(currentState ==='Login'){
            newUrl +="/api/admin/login"
            try{
            const response = await axios.post(newUrl,data,{
                    headers: { "Content-Type": "application/json" }}
            );
            if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setData({
                name:"",
                email:"",
                password:"" 
            })
            toast.success("Logged in successfully")
            navigate("/ProductList")
            }else{
                toast.error(response.data.message)
            } }catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
        }
                

        }else if(currentState ==='Sign Up'){
            newUrl +="/api/admin/register"
        try{
        const signinResponse = await axios.post(newUrl,data
            ,{
                headers: { "Content-Type": "application/json" }}
        );
        if(signinResponse.data.success){
        setToken(signinResponse.data.token);
        localStorage.setItem("token",signinResponse.data.token);
        setData({
            name:"",
        email:"",
        password:""
        })
        toast.success("signed in successfully")

        setCurrentState("Login")
        }else{
             toast.error(signinResponse.data.message)

            alert(signinResponse.data.message)
        }
        } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
    }
    }
    }
    useEffect(()=>{
            console.log(data)
        },[data])
    
  return (
    <div className='admin'>
        <form className="admin-content" onSubmit={handleSubmit}>
            <div className = "login-title">
                <h2>{currentState}</h2>
                
            </div>
            <div className="login-input">
                {currentState ==="Login"?<></>:<input type="text" value={data.name} onChange={handleChange} name="name" placeholder='Enter username' required/>}
                <input type="email"  name="email" onChange={handleChange} value={data.email} placeholder='Enter email' required/>
                <input type="password" name="password" onChange = {handleChange}  value={data.password} placeholder='Enter password' required/>
            </div>
            <button className='login-button'>{currentState ==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-check">
                <input type="checkbox" required/>
                <p>By continuing ,I agree to the terms and condition</p>
                </div>
        
                {currentState =="Login"?
                <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
                <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>
                }
        </form>
    </div>
  )
}

export default AdminLogin
