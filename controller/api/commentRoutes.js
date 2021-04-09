const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW COMMENT
router.post('/', withAuth, (req, res) => {
    Comment.create({
        text: req.body.text,
        blog_id: req.body.blog_id,
        user_id: req.session.user_id,
        date: req.body.currentdate
    })
    .then(response => res.json(response))
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;