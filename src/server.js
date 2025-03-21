require('dotenv').config();
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888;//port => hartcode . uat .pord
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const connection = require('./config/database')


//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes)

//test connection 


// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>> results = ", results); // results contains rows returned by server
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})