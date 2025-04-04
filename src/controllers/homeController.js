const connection = require('../config/database');
const mysql = require('mysql2/promise');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');
const User = require("../models/user");


const getHomepage = async (req, res) => {

    // let results = [];
    const results = await User.find({});
    return res.render('home.ejs', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    console.log(">>> check req.body : ", req.body)

    let { email, myname, city } = req.body;
    await User.create({
        email: email,
        name: myname,
        city: city
    })

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

const postDeleteUser = async (req, res) => {

    const userId = req.params.userId;

    let user = await getUserById(userId);

    res.render('delete.ejs', { infUser: user });
}

const postHandleRemoveUser = async (req, res) => {

    const { userId } = req.body;

    await deleteUserById(userId);

    res.redirect('/')
}

module.exports = {
    getHomepage, getABC, postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}