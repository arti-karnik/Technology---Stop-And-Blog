const { User } = require('../models');

const userdata = [
  {
    username: 'arti1234',
    password: '$2b$10$Vv/LoDHud5whZHsCE/Jn/.sKMEARPdcwoDpgb7.pyYo6dk5a3SlaO',
  },
  {
    username: 'Michael',
    password: '$2b$10$Vv/LoDHud5whZHsCE/Jn/.sKMEARPdcwoDpgb7.pyYo6dk5a3SlaO',
  },
  {
    username: 'Joseph',
    password: '$2b$10$Vv/LoDHud5whZHsCE/Jn/.sKMEARPdcwoDpgb7.pyYo6dk5a3SlaO',
  },
  {
    username: 'Meghs M',
    password: '$2b$10$Vv/LoDHud5whZHsCE/Jn/.sKMEARPdcwoDpgb7.pyYo6dk5a3SlaO',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
