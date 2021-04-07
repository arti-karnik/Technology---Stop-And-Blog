const { Comment } = require('../models');

const commentdata = [
  {
    text: 'Good Work!!!',
    date: '03-04-2021',
    user_id: 1,
    blog_id: 1
  },
  {
    text: 'Nice Work!!!',
    date: '02-02-2021',
    user_id: 2,
    blog_id: 2
  }
];

const seedcomment = () => Comment.bulkCreate(commentdata);

module.exports = seedcomment;
