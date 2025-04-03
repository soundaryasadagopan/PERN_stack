import React from 'react'

const Login = ({formData,setFormData}) => {
  return (
    
      <div className='login-input'>
    
    <input type="text"  placeholder="Name"  onChange={(event)=>setFormData({...formData,name:event.target.value})} value={formData.name}   required />
        <input type="email"  placeholder="Email"  onChange={(event)=>setFormData({...formData,email:event.target.value})} value={formData.email}  required />
        <input type="tel"  placeholder="Mobile"  onChange={(event)=>setFormData({...formData,mobile:event.target.value})} value={formData.mobile} required />
        
        

      </div>
  
  )
}

export default Login
