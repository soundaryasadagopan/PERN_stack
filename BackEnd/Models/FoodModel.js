const { DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const Food = sequelize.define("Food", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, 
    
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB("long"), 
    allowNull: false,
  },
  Date:{
    type: DataTypes.DATE,
    allowNull: true,
  }
  
}, {
  timestamps: true, 
});

module.exports = Food;
