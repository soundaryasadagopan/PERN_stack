import React from 'react'
import './userLogin.css'

const Personalinfo = ({formData,setFormData}) => {
  return (
    < div className='login-input'>
        <input type="text" placeholder="Parent Name"  onChange={(event)=>setFormData({...formData,parentName:event.target.value})} value={formData.parentName} required />
    
            <input type="text"  placeholder="Student Name"  onChange={(event)=>setFormData({...formData,studentName:event.target.value})} value={formData.studentName} />
            <input type="text" placeholder="Location"   onChange={(event)=>setFormData({...formData,location:event.target.value})} value={formData.location}/>
        
        
        
      </div>
  )
   
}

export default Personalinfo
