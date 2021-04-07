const sequelize = require('../config/connection');
const seedUser = require('./seed-user.js');
const seedBlog = require('./seed-blog.js');
const seedcomment = require('./seed-comment.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("Seed Database");

  await seedUser();
  console.log("USER SEEDED");

  await seedBlog();
  console.log("BLOG SEEDED");

  await seedcomment();
  console.log("COMMENT SEEDED");

  process.exit(0);
};

seedAll();
