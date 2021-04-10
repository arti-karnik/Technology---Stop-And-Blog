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
            req.session.isLogin = false;
            req.session.isDashboard = false;
            req.session.isHome = true;
            const blogs = blogData.map((blog) => blog.get({ plain: true }));
            res.render('homePage', { blogs, loggedIn: req.session.loggedIn, isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome  });
        }
    } catch (err) {
        res.status(500).json(err);
    }
   
});

// OPEN SIGN-UP PAGE
router.get('/signUp', (req, res) => {
    req.session.isLogin = true;
            req.session.isDashboard = false;
            req.session.isHome = false;
            
    res.render('signUpPage', {isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome });
});

// OPEN LOGIN PAGE
router.get('/login', (req, res) => {
    req.session.isLogin = true;
    req.session.isDashboard = false;
    req.session.isHome = false;

    res.render('loginPage', { isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome});
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
            req.session.isLogin = false;
            req.session.isDashboard = true;
            req.session.isHome = false;
            res.render('Dashboard', { blogs, loggedIn: req.session.loggedIn,  isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome  });
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
        req.session.isLogin = false;
        req.session.isDashboard = true;
        req.session.isHome = false;
        res.render('EditPost', { blogs, loggedIn: true, isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// ADD NEW BLOG
router.get('/addnewBlog', (req, res) => {
    req.session.isLogin = false;
            req.session.isDashboard = true;
            req.session.isHome = false;
            
    res.render('AddNewPost', {isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome });
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
            req.session.isLogin = false;
            req.session.isDashboard = false;
            req.session.isHome = true;
            

            res.render('Comments', { blogs, loggedIn: req.session.loggedIn , isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;