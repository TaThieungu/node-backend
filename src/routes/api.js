const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserApi, postUploadMultipleFile, postUploadSingleFile, putUpdateUserApi } = require('../controllers/apiController')

routerAPI.get('/users', getUsersAPI)

routerAPI.post('/users', postCreateUserApi);

routerAPI.post('/file', postUploadSingleFile);

routerAPI.post('/files', postUploadMultipleFile);

routerAPI.put('/users', putUpdateUserApi);
module.exports = routerAPI; // export default 