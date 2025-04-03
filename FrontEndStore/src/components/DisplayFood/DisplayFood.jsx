import React,{useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './DisplayFood.css'

const DisplayFood = () => {
    const{food_list} = useContext(StoreContext)
  return (
    <div className='food-display'>
        <h2>Top dishes near you</h2>
        <div className = "food-display-item">
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

export default DisplayFood
