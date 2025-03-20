require('dotenv').config();
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888;//port => hartcode . uat .pord
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const mysql = require('mysql2');


//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes)

//test connection 
//create the connection to database 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    database: 'hoidanit',
    password: '123456'
});

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>> results = ", results); // results contains rows returned by server
        console.log(">>> fields = ", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})