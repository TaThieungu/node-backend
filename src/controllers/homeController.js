const connection = require('../config/database');
const mysql = require('mysql2/promise');
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {

    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    console.log(">>> check req.body : ", req.body)

    let { email, myname, city } = req.body;

    const [results, fields] = await connection.execute(
        `INSERT INTO 
        Users(email, name, city)
        VALUES (?, ?, ?)`,
        [email, myname, city],

    );

    res.send('Create user success !')


}


const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    const userId = req.params.userId;
    return res.render('edit.ejs')
}


const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, postCreateUser, getCreatePage, getUpdatePage }