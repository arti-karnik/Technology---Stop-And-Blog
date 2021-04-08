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
  },
  {
    text: 'great tutrial!!!',
    date: '03-04-2021',
    user_id: 1,
    blog_id: 1
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    date: '03-03-2019',
    user_id: 1,
    blog_id: 2
  },
];

const seedcomment = () => Comment.bulkCreate(commentdata);

module.exports = seedcomment;
