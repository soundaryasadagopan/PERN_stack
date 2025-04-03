const express = require("express");
const cors = require("cors");
 require("dotenv").config();
 const userRouter = require("./route/userRouter.js")
 const db = require("./Config/db.js");
const adminRouter = require("./route/adminRouter.js");
const foodRouter = require("./route/FoodRouter.js");
const Food = require('./Models/FoodModel.js')

 const app = express();
const port =4000;
app.use(express.json());
// app.use('/image',express.static('uploads'))
app.get("/image/:id", async (req, res) => {
    try {
        const food = await Food.findByPk(req.params.id);

        if (!food || !food.image) {
            return res.status(404).json({ success: false, message: "Image not found" });
        }

        res.set("Content-Type", "image/jpeg"); 
        res.send(food.image); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching image" });
    }
});



app.use(cors());

app.use("/api/user",userRouter)

app.use("/api/admin",adminRouter)

app.use("/api/food",foodRouter)


db.sync({ alter: true }).then(() => {
    console.log("PostgreSQL Database connected");
})
 app.listen(port,()=>{
    console.log(`Server is listening to port http://localhost:${port}`)

 })