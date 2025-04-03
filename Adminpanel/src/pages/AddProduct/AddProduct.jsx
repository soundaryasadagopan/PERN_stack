import React ,{useState}from 'react'
import { assets } from '../../assets/assets';
import './AddProduct.css'
import axios from 'axios'
import { toast } from 'react-toastify';


const AddProduct = ({url}) => {
    const[image,setImage] = useState(false);
    const[data,setData] =useState({
        name:"",
        description:"",
        price:"",
        category:"salad",
        Date:""
    })
    const handleChange=(event)=>{
        const value =event.target.value;
        const name = event.target.name;
        setData((prev)=>({...prev,[name]:value}))
    }
    const handlerSubmit=async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("category",data.category);
        formData.append("price",Number(data.price));
        formData.append("image",image);
        const response = await axios.post(`${url}/api/food/add`,formData);
        console.log("formResponse",response)
        if(response.data.success){
            console.log("response success")
            setData({ name:"",
                description:"",
                price:"",
                category:"salad",
            Date:""})
                setImage(false);
                toast.success(response.data.message);
        }else{
            toast.error(response.data.message)
        }
    }
    
  return (
    <div className='add'>
        <form className='flex-col' onSubmit={handlerSubmit}>
            <div className='add-image-upload flex-col'>
                <p>Upload image</p>
                <label htmlFor='image'><img src={image?URL.createObjectURL(image):assets.add_icon} alt=""/></label>
                <input type="file" id="image"onChange={(e)=>{
                     console.log("Selected file:", e.target.files[0]);setImage(e.target.files[0])} } accept="image/*"
    hidden required/> 
            </div>
            <div className = "add-product-name flex-col">
                <p>Product name</p>
                <input type="text" onChange = {handleChange} value ={data.name}name="name" placeholder='Type here'/>
            </div>
            <div className = "add-product-description flex-col">
                <p>Product description</p>
                <textarea name="description"onChange ={handleChange} value={data.description} rows="6"placeholder='Write content here'/>
            </div>
            <div className='add-price-category flex-col'>
                <div className='add-category flex-col'>
                    <p>Product category</p>
                    <select className='category' onChange={handleChange}  name ="category"value={data.category} >
                       <option value="salad" >Salad</option>
                       <option value="Rolls" >Rolls</option>
                       <option value="sandwich" >Sandwich</option>
                       <option value="Deserts" >Deserts</option>
                       <option value="cake" >Cake</option>
                       <option value="pure veg" >Pure veg</option>
                       <option value="pasta">Pasta</option>
                       <option value="Noodles" >Noodles</option>
                    </select>
                </div>
                <div className='add-price flex-col'>
                    <p>Product Price</p>
                    <input type="number" name="price"   onChange={handleChange} value={data.price}placeholder='$20'/>
                </div>
                <div className='add-price flex-col'>
                    <p>Order on</p>
                    <input type="date" name="date"   onChange={handleChange} value={data.Date}/>
                </div>
            </div>
            <button className='add-btn'type ="submit">ADD</button>
        </form>
      
    </div>
  )
}

export default AddProduct
