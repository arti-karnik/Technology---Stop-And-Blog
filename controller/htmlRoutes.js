const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Home page
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

// signup page
router.get('/signUp', (req, res) => {
    res.render('signUpPage');
});

// Login page
router.get('/login', (req, res) => {
    res.render('loginPage');
});
router.get('/Dashboard', withAuth, (req, res) => {
    Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'create_date'
            ],
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
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('Dashboard', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/Dashboard/edit/:id', withAuth, (req, res) => {
    Blog.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'title',
                'content',
                'create_date'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'text', 'blog_id', 'user_id', 'date'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No blog found with this id' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            res.render('EditPost', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

//Add new post 
router.get('/addnewPost', (req, res) => {
    res.render('AddNewPost');
});

router.get('/blog/:id', withAuth,  (req, res) => {
    Blog.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'create_date',
            ],
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
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            res.render('Comments', { post, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;