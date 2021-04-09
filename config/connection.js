const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
 /* process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD*/
  {
    HOST: "us-cdbr-east-03.cleardb.com",
    USER: "b4dc0ce011ccbb",
    PASSWORD: "5347da50",
    DB: "heroku_e2f9d8952254755",
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
