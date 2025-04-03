import React ,{useContext}from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import './FoodItem.css'

const FoodItem = ({id,name,image,category,description,price}) => {
    const{addToCart,removeCart,cartItems} = useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt=""/>
        {!cartItems[id] ?
        <img  className= "add" onClick ={()=>addToCart(id)} src={assets.add_icon_white} alt =""/>:
        <div className= "food-item-counter">
          <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt=""/>
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
          </div>
      }
      </div>
      <div className='food-item-info'>
        {/* <div className="food-item-rating">
        <p>{name}</p>
        <img className='star-rating' src={assets} alt=""/>
        </div>
       */}
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
</div>
    </div>
  )
 
}

export default FoodItem
