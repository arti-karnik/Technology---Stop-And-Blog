const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

// Import the custom middleware
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll({
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
    });
    if(blogData) {
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homePage', { blogs, loggedIn: req.session.logged_in });
    }
});

router.get('/signUp', (req, res) => {
    res.render('signUpPage');
});

router.get('/login', (req, res) => {
  res.render('loginPage');
});

router.get('/Dashboard', (req, res) => {
    res.render('Dashboard', {
        logged_in: true
    });
});

module.exports = router;
