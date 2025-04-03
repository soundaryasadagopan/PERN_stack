const User = require("../Models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")


const registerUser = async (req, res) => {
    try {
      const { name, email, mobile,parentName,studentName,location,password,plan} = req.body;
  
      // Check if user exists
      const exists = await User.findOne({ where: { email } });
      if (exists) {
        return res.status(400).json({ success: false, message: "User already exists" });
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ success: false, message: "Please enter  valid email" });
      }
  
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        mobile,parentName,studentName,location,plan
      });
  
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ success: true, token });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error registering user" });
    }
  };
  const loginUser = async(req,res)=>{
    try{
    const{email,password} = req.body;
    const user = await User.findOne({email});
    console.log(user);
    console.log("userpassword")
     if(!user){
        return res.status(400).json({success:false,message:"User not exists"})
     }
     const isMatch = await bcrypt.compare(password,user.password);
     console.log("isMatch",isMatch);

     if(!isMatch){
        return res.status(404).json({success:false,message:"Incorrect password"})
     }
     const token = await jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
     console.log("token",token)
     return res.status(200).json({success:true,token})
    }catch(error){
        res.status(500).json({success:false,error})
    }

}
  module.exports = {registerUser,loginUser}