const { User } = require('../models');

const userdata = [
  {
    username: 'arti',
    password: 'password1234',
  },
  {
    username: 'test',
    password: 'password1234',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
