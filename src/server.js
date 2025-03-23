require('dotenv').config();
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888;//port => hartcode . uat .pord
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: 'La Anh Quan cat' });
cat.save();


(async () => {

    try {
        //test connection
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }

})()

