const connection = require('../config/database');



const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> check req.body : ", req.body)

    let { email, myname, city } = req.body;

    connection.query(
        `INSERT INTO 
        Users(email, name, city)
        VALUES (?, ?, ?)`,
        [email, myname, city],
        function (err, results) {
            console.log(">> check results ", results);
            console.log(">> check err ", err);
            // console.log(err)
            return res.send('Create user success !')
        }
    );

    // INSERT INTO Users
    // VALUES(3, 'test', 'eric va hoidanit', 'namdinh');

}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, postCreateUser }