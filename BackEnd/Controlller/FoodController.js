const Food = require("../Models/FoodModel")

const addFood = async(req,res)=>{
    try{
    const imageFile = `${req.file.filename}`
console.log(imageFile)
    const food = await Food.create({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:imageFile,
        date:req.body.date
    })
    
     
        res.json({success:true,message:"Food added",food})
    
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error})
    }
    }
    const listFood=async(req,res)=>{
        try{
        const food= await Food.findAll();
       
        const foodImage = food.map((item) => {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                category: item.category,
                price: item.price,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                image: item.image ? `data:image/jpeg;base64,${item.image.toString("base64")}` : null
            };
        });
        console.log()
        res.json({success:true,data:foodImage})
        }catch(error){
            console.log(error)
            res.json({success:false,message:error})
        }
    }

    const removeFood =async(req,res)=>{
        try{
        const food =await Food.findByPk(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        
        await food.destroy()
            res.json({success:true,message:"food removed"})
        }catch(error){
            console.log(error);
            res.json({success:false,message:error})
        }
    }
    module.exports ={addFood,listFood,removeFood};