import React, { useState } from 'react'
import './Home.css'
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
const Home = () => {
    const[category,setCategory] =useState("All");
  return (
    <div>
        
        <Menu category={category} setCategory={setCategory}/>
      
    </div>
  )
}

export default Home
