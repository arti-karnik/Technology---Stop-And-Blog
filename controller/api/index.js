const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogroutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blog', blogRoutes);

module.exports = router;