const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

// Import the custom middleware
//const withAuth = require('../utils/auth');


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
            res.render('Comments', { blogs, loggedIn: req.session.logged_in });

            // res.render('homePage', { blogs, loggedIn: req.session.logged_in });
        }
    } catch (err) {
        res.status(500).json(err);
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

router.get('/blogs', (req, res) => {
    Blog.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'text', 'blog_id', 'user_id'],
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
            console.log(dbPostData);
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            console.log(post);

            
            //res.render('Post', {layout : 'main'});

           // res.render('Comments', { post, loggedIn: req.session.logged_in });

           // res.render('Comments', {post});

           // res.render('Comments', { post, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;
