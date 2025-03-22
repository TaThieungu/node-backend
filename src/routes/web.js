const express = require('express');
const { getHomepage, getABC, postUpdateUser,
    postCreateUser, getCreatePage, getUpdatePage }
    = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.get('/update/:userId', getUpdatePage)


router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);


module.exports = router; // export default 