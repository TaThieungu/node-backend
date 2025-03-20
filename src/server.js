require('dotenv').config();
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')

const app = express()
const port = process.env.PORT || 8888;//port => hartcode . uat .pord
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')

//config template engine
configViewEngine(app);

//khai báo route
app.use(webRoutes)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})