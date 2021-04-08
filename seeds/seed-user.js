const { User } = require('../models');

const userdata = [
  {
    username: 'arti',
    password: 'password1234',
  },
  {
    username: 'Michael',
    password: 'password1234',
  },
  {
    username: 'Joseph',
    password: 'password1234',
  },
  {
    username: 'Meghs M',
    password: 'password1234',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
