# Technology-Stop-And-Blog

 [Technology-Stop-And-Blog](#Technology-Stop-And-Blog)
    - [Table of Contents](#table-of-contents)
  * [Summary](#summary)
  * [Description](#description)
  * [Pre-requisite](#pre-requisite)
  * [Demo](#demo)
  * [Technologyused](#technologyused-)
  * [Install](#install-)
  * [Contributor](#contributor)
  * [Codebase](#codebase)
  * [Application Walk-through](#Application-walk-through)


## Summary
 Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Build this site completely from scratch and deploy it to Heroku. App will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Description
As a developer who writes about tech, build a CMS-style blog site
to publish articles, blog posts, and my thoughts and opinions

## Pre-requisite
Install NodeJS 

## Demo
![](./public/images/myGif.gif?raw=true)
<img src="./public/images/SS1.png">
<img src="./public/images/SS2.png">
<img src="./public/images/SS3.png">
<img src="./public/images/SS4.png">

## Technologyused:
<ul>
    <li> 
    <a href="https://sequelize.org/" target="_blank">Sequilize  <a>
    <br>
    </li>
    <li> 
    <a href="https://nodejs.org/en/docs/" target="_blank">NodeJS <a>
    <li> 
    <a href="https://expressjs.com/en/guide/routing.html" target="_blank">Express.js<a>
    </li>
    <li> 
    <a href="https://dev.mysql.com/doc/" target="_blank">mySQL </a>
</ul>

## Install:
<strong>Code installation:</strong> <br>
$ cd [path_to_save_codebase] <br>
$ git clone https://github.com/arti-karnik/Technology-StopAndBlog<br>

Add env file: <br>
Go to Folder, add new file name it as .env <br>
DB_USER='<your mysql username>' <br>
DB_PASSWORD='<your mysql password>' <br>
DB_NAME='blogDB' <br>

Installing Database: <br>
1. Via Terminal: <br>
msql -u root -p  <press enter> <br>
DROP DATABASE IF EXISTS blogdb; <press enter>  <br>
CREATE DATABASE blogdb; <br> <press enter> <br>

2. Using mysql work bence: <br>
Open sql work bence <br>
DROP DATABASE IF EXISTS blogdb;
CREATE DATABASE blogdb; <br>

<strong> Run the application: </strong> <br>
Open Terminal <br>
$ npm install <br>
$ npm run seed <br>
$ npm start <br>
 
## Contributor
<strong> Github Profile: </strong> <br>
https://github.com/arti-karnik

<strong> Portfolio: </strong> <br>
https://arti-karnik.github.io/MyPortfolioPage/

## Codebase
https://github.com/arti-karnik/Technology-StopAndBlog


## Application Walk-through
<a href="https://arcane-inlet-16342.herokuapp.com/" target="_blank"> Click here for Application Live url </a>



