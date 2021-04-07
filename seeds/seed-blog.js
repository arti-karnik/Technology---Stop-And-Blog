const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Blossoming Apricot',
    create_date: '03-04-2021',
    user_id: 1,
    content:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Blossoming Apricot',
    create_date: '03-04-2021',
    user_id: 1,
    content:
      'Branches with pink apricot blossoms against a blue background.',
  }
];

const seedPaintings = () => Blog.bulkCreate(blogdata);

module.exports = seedPaintings;
