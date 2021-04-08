const router = require('express').Router();
const homeRoutes = require('./htmlRoutes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./DashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/Dashboard', dashboardRoutes);

module.exports = router;
