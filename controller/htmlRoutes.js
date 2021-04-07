const router = require('express').Router();

// Import the custom middleware
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/signUp', (req, res) => {
    res.render('signUpPage');
});

router.get('/login', (req, res) => {
  res.render('loginPage');
});

router.get('/authorised', (req, res) => {
    res.render('Dashboard');
});

module.exports = router;
