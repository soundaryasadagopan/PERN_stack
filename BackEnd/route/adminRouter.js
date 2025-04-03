const express = require("express");
const {registerAdmin,loginAdmin} =require("../Controlller/adminController");

const adminRouter = express.Router();

adminRouter.post("/register",registerAdmin);

adminRouter.post("/login",loginAdmin);


module.exports= adminRouter;