import React, { useContext } from 'react'
import { useState } from 'react'
import './userLogin.css'
import Personalinfo from './personalinfo';
import PlanInfo from './planInfo';
import Login from './Login';
import { useEffect } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import {Link} from 'react-router-dom'

const UserLogin = () => {
    const navigate = useNavigate();
    const url = "http://localhost:4000"
    const[item,setItem] =useState("")
    const[step,setStep] = useState(0);
    const{token,setToken} =useContext(StoreContext)
    const[formData,setFormData] =useState({
        name:"",
        email:"",
        mobile:"",
        parentName:"",
        studentName:"",
        location:"",
        plan:""
    
    })
    const formTitle=["Sign up","Personal Information","Select Plans"]
    
    
     
      
      const pageDisplay=()=>{
        if(step === 0){
            return <Login formData={formData} setFormData={setFormData}/>
        }else if(step ===1){
            return <Personalinfo  formData={formData} setFormData={setFormData}/>
        }
        else if (step ===2){
            return <PlanInfo  formData={formData} setFormData={setFormData}/>
        }
      }
   const handlerSubmit=async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.post(`${url}/api/user/register`,formData,{
                headers: { "Content-Type": "application/json" }}
        );
        if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setFormData({
            name:"",
            email:"",
            mobile:"",
            parentName:"",
            studentName:"",
            location:"",
            plan:""
        })
        toast.success("signed in successfully")
        navigate("/")
        }else{
            toast.error(response.data.message)
        } }catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
    }
            
   }
    useEffect(()=>{
        console.log(formData)
    },[formData])

  return (
    <>
        <div className='admin'>
        <form className="admin-content" onSubmit={handlerSubmit}>
            <div className = "login-title">
                <h2>{formTitle[step]}</h2>
            </div>
            <div  className='body'>{pageDisplay()}</div>
            <div className = "footer">
            <Link to="/userLogin">  <p>Already have an account?  <span >Login</span></p></Link>
                
                
                <button disabled = {step==0} onClick={()=>{setStep((prev)=>prev-1)}}>prev</button>
                <button   onClick={ (e)=>{
                    if(step === formTitle.length-1){
                       
                        console.log("formdata",formData)
                    }else{
                        setStep((prev)=>prev+1)
                }}}>
                    {step === formTitle.length-1? "Submit":"Next"}</button>

            </div>
        </form>
     </div>
     </>
      
    
  )
}

export default UserLogin
