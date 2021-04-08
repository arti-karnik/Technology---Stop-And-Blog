const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root1234",
  DB: "blogDB"
});

module.exports = sequelize;
