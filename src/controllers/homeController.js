const connection = require('../config/database');
const mysql = require('mysql2/promise');
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService');

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

const getUpdatePage = async (req, res) => {
    const userId = req.params.userId;
    let user = await getUserById(userId);
    return res.render('edit.ejs', { infUser: user })
}


const getABC = (req, res) => {
    res.render('sample.ejs')
}

const postUpdateUser = async (req, res) => {
    const { email, myname, city, userId } = req.body;


    await updateUserById(email, myname, city, userId);

    // return res.send('Update user success')
    return res.redirect('/');
}

module.exports = {
    getHomepage, getABC, postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser
}