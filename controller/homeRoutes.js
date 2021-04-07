const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/signUp', (req, res) => {
    console.log("sign up pahe");
    res.render('signUpPage');
});

router.get('/login', (req, res) => {
  res.render('loginPage');
});

router.get('/authorised', (req, res) => {
    res.render('Dashboard');
});

module.exports = router;
