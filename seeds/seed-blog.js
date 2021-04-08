const { Blog } = require('../models');

const blogdata = [
  {
    title: 'What is JavaScript?',
    create_date: '03/04/2021',
    user_id: 1,
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'  
  },
  {
    title: 'MVC Framework - Introduction',
    create_date: '01/01/2019',
    user_id: 2,
    content: 'The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.',
  },
  {
    title: 'mysql- Tutorial',
    create_date: '03/05/2020',
    user_id: 2,
    content: 'MySQL Database Service is a fully managed database service to deploy cloud-native applications. HeatWave, an integrated, high-performance analytics engine accelerates MySQL performance by 400x.'  
  },
  {
    title: 'OOps concept',
    create_date: '05/01/2018',
    user_id: 3,
    content: 'They are an abstraction, encapsulation, inheritance, and polymorphism. Grasping them is key to understanding how Java works. Basically, Java OOP concepts let us create working methods and variables, then re-use all or part of them without compromising security.'
  }
];

const seedPaintings = () => Blog.bulkCreate(blogdata);

module.exports = seedPaintings;
