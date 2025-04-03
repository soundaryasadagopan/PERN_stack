import React from 'react'
import './userLogin.css'

const PlanInfo = ({formData,setFormData}) => {
  return (
    <div className='login-info'>
       <select name="plan"  onChange ={(event)=>setFormData({...formData,plan:event.target.value})}required>
          <option value="1 Month - 4000Rs">1 Month - 4000Rs</option>
          <option value="3 Months - 12000Rs">3 Months - 12000Rs</option>
          <option value="6 Months - 24000Rs">6 Months - 24000Rs</option>
          <option value="12 Months - 48000Rs">12 Months - 48000Rs</option>
        </select>
        <label>
          <input type="checkbox" name="agreeTerms"  required />
          Agree to Terms & Conditions
        </label>
        
    </div>
  )
}

export default PlanInfo
