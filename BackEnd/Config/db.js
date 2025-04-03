const { Sequelize } = require("sequelize");

// PostgreSQL Database Connection
const sequelize = new Sequelize("Demo-project", "dev", "1234", {
  host: "localhost", 
  dialect: "postgres", 
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connected!");
  } catch (error) {
    console.error(" Error connecting to PostgreSQL:", error);
  }
}

connectDB();

module.exports = sequelize;
