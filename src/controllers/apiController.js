const User = require("../models/user");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');

const { uploadSingleFile, uploadMultipleFile } = require('../services/fileService')
const getUsersAPI = async (req, res) => {

    // let results = [];
    const results = await User.find({});

    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}
const postCreateUserApi = async (req, res) => {
    console.log(">>> check req.body : ", req.body)

    let { email, myname, city } = req.body;
    let user = await User.create({
        email: email,
        name: myname,
        city: city
    })

    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )

}

const putUpdateUserApi = async (req, res) => {
    const { email, name, city, userId } = req.body;
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });

    // return res.send('Update user success')
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const postUploadSingleFile = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }
    let result = await uploadSingleFile(req.files.image);
    console.log("check", result);

    return res.send('ok');
}
const postUploadMultipleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }

    if (Array.isArray(req.files.image)) {
        let result = await uploadMultipleFile(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    } else {
        return await postUploadSingleFile(req, res);
    }
}
module.exports = {
    getUsersAPI,
    postCreateUserApi,
    putUpdateUserApi,
    postUploadSingleFile,
    postUploadMultipleFile
}