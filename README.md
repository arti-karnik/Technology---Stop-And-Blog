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
Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Task is to build the back end for an e-commerce site. Configure a working Express.js API to use Sequelize to interact with a MySQL database.

## Description
Application have 3 tables - 
1. Product: <br>
        ID (Primary key), <br>
        product_name (String), <br>
        price (decimal),<br>
        Stock (Integer),<br>
        category_id(References the 'Category' model's 'id')<br>

2. Category <br>
        id (Primary key) <br>
        Category_name <br>

    
3. Tag <br>
        id (Primary key), <br>
        tag_name (String) <br>

  
4. ProductTag <br>
        id (Primary key), <br>
        product_id (Integer) References the 'Product' model's 'id', <br>
        tag_id (Integer)  References the 'Tag' model's 'id'. <br>

Create a back-end for E-commerce application to demonstrate routes in Insomnia.  <br>
1.  GET routes to return all Categories, all Products, and all Tags <br>
2.  GET By ID to return Product by ID, Category by ID & Tag by ID <br>
3.  POST routes to create new Cateogry, Product and Tag<br>
4.  PUT routes to update Category, Product, Tag for given ID.<br>
5.  DELETE routes to delete Category, Product, Tag for given ID.<br>

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
$ node server.js <br>
 
## Contributor
<strong> Github Profile: </strong> <br>
https://github.com/arti-karnik

<strong> Portfolio: </strong> <br>
https://arti-karnik.github.io/MyPortfolioPage/

## Codebase
https://github.com/arti-karnik/E-Commerce-Back-End


## Application Walk-through
<a href="https://drive.google.com/file/d/1P_LHeyXYdz-bCtFBbUG0dPZkm1z7T4Ht/view?usp=sharing" target="_blank"> Click here for Walk through video </a>



