const express = require('express');
const app = express();
const port = 3011;
const routes = require('./controller');
const path = require('path');

//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layout',
    extname: '.handlebars'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
/*
app.get('/', (req, res) => {
  res.render('homePage');
});
app.get('/authorised', (req, res) => {
  res.render('Dashboard');
});
app.get('/login', (req, res) => {
  res.render('loginPage');
});
app.get('/newPost', (req, res) => {
  res.render('Post');
});*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);


app.listen(port, () => console.log(`App listening to port ${port}`));