import React ,{useContext}from 'react'
import "./Cart.css"
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{cartItems,removeCart,} =useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className ="cart-items">
        <div className ="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        
          {food_list.map((item,index)=>{
            if(cartItems[item._id] >0){
            return(
              <div>
              <div className='cart-items-title cart-items-item'>
              <img src={item.image}/>
              <p>{item.name}</p>
              <p>{item.price}</p>

              <p>{cartItems[item._id]}</p>
              <p>{cartItems[item._id] * item.price}</p>
              <p className='cross'onClick ={()=>removeCart([item._id])}>x</p>

              </div>
              <hr/>
              </div>
            )
          }
          })}

        </div>
        </div>
  )
        
}

export default Cart
