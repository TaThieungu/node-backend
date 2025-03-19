const express = require('express') //commonjs
const path = require('path') //commonjs
require('dotenv').config();

// import express from 'express' ;  //es modules


const app = express()
const port = process.env.PORT || 8888;//port => hartcode . uat .pord
const hostname = process.env.HOST_NAME;


//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/abc', (req, res) => {
    // res.send('Hello ABC')
    res.render('sample.ejs')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})