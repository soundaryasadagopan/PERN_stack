const Admin =require("../Models/adminModel")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")


const createToken =(id)=>{
    return  jwt.sign({ id}, process.env.JWT_SECRET, { expiresIn: "1h" });
} 

const registerAdmin = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const exists = await Admin.findOne({ where: { email } });
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
  
      const admin = await Admin.create({
        name,
        email,
        password: hashPassword,
      });
  
      const token = createToken(admin.id)
  
      res.json({ success: true, token });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error registering user" });
    }
  };
  const loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const admin = await Admin.findOne({ where: { email } });
      if (!admin) {
        return res.status(400).json({ success: false, message: "User not exists" });
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Incorrect password" });
      }
  
      const token = createToken(admin.id)
  
      res.json({ success: true, token });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error logging in" });
    }
  };
  
  module.exports = {registerAdmin,loginAdmin}