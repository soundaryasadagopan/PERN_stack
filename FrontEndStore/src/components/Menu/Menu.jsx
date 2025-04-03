import React,{useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './Menu.css'
const Menu = ({category}) => {
    const{food_list} = useContext(StoreContext)
    return (
      <div className='menu-display'>
          <h2>Top dishes near you</h2>
          <div className = "menu-display-item">
              {food_list.map((item,index)=>{
                if(category ==="All" || category === item.category){
                  {console.log("category",item.category)}
                  return <FoodItem key={index} id={item._id} name={item.name}  image={item.image} price={item.price} category={item.category} description={item.description}/>
                }
                })}
  
          </div>
        
      </div>
    )
}

export default Menu
