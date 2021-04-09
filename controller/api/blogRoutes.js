
const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');

// CREATE NEW BLOG
router.post('/', withAuth, (req, res) => {
    Blog.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        create_date: req.body.create_date
    })
    .then(response => res.json(response))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET ALL BLOGS
router.get('/', (req, res) => {
    Blog.findAll({
            attributes: ['id','title','content','created_at'],
            order: [['created_at', 'DESC']],
            include: 
            [{ model: User, attributes: ['username']},
            {  model: Comment, attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
             include: { model: User, attributes: ['username']}}]
            })
        .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET BLOG BY ID: 
router.get('/:id', withAuth, (req, res) => {
    Blog.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'content', 'title', 'date' ],
        include: [{ model: User, attributes: ['username']},            
        {   model: Comment, attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'create_date'],
            include: { model: User, attributes: ['username']}}]
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// UPDATE BLOG BY ID: 
router.put('/:id', withAuth, (req, res) => {
    Blog.update({
            title: req.body.title, 
            content: req.body.content
            }, 
            {  
                where: { id: req.params.id 
            }
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No Blog found with this id' });
                return;
            }
            res.json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//  DELETE BLOG BY ID 
router.delete('/:id', withAuth, (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        if (!response) {
        res.status(404).json({ message: 'No Blog found with this id' });
        return;
    }
    res.json(response);
    })
    .catch(err => {
    res.status(500).json(err);
    });
});
module.exports = router;