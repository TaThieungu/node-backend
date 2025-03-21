const connection = require('../config/database');
const bodyParser = require('body-parser');



const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> check res.body : ", req.body)
    return res.send('hello vn toi yeu')
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, postCreateUser }