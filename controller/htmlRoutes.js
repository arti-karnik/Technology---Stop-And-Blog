const router = require('express').Router();
const { response } = require('express');
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

// OPEN HOME PAGE
router.get('/', async (req, res) => {
    try {
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
            res.render('homePage', { blogs, loggedIn: req.session.loggedIn });
        }
    } catch (err) {
        res.status(500).json(err);
    }
   
});

// OPEN SIGN-UP PAGE
router.get('/signUp', (req, res) => {
    res.render('signUpPage');
});

// OPEN LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('loginPage');
});

// OPEN DASHBOARD PAGE
router.get('/Dashboard', withAuth, (req, res) => {
    Blog.findAll({
            where: { user_id: req.session.user_id },
            attributes: [ 'id', 'title', 'content', 'create_date' ],
            include: [{ model: Comment,
                    attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
                    include: {  model: User, attributes: ['username'] }
                },
                { model: User, attributes: ['username'] }
            ]
        })
        .then(response => {
            const blogs = response.map(blog => blog.get({ plain: true }));
            res.render('Dashboard', { blogs, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// EDIT BLOG BY ID 
router.get('/Dashboard/edit/:id', withAuth, (req, res) => {
    Blog.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'title', 'content', 'create_date' ],
            include: [{ model: User, attributes: ['username'] },
            { model: Comment, attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
             include: { model: User, attributes: ['username'] 
            }
        }]
    })
    .then(response => {
        if (!response) {
            res.status(404).json({ message: 'No blog found with this id' });
            return;
        }
        const blogs = response.get({ plain: true });
        res.render('EditPost', { blogs, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// ADD NEW BLOG
router.get('/addnewBlog', (req, res) => {
    res.render('AddNewPost');
});

// OPEN OTHER USER'S BLOG BY ID
router.get('/blog/:id', withAuth,  (req, res) => {
    Blog.findOne({ 
            where: {
                id: req.params.id
            },
            attributes: ['id', 'content', 'title', 'create_date', ],
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
                }]
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const blogs = response.get({ plain: true });
            res.render('Comments', { blogs, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;