const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

const withAuth = require('../utils/auth');

// get all looged in user blogs
router.get('/', withAuth, (req, res) => {
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
            res.render('Dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;
