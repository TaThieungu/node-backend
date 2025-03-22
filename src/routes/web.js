const express = require('express');
const { getHomepage, getABC, postUpdateUser, postDeleteUser,
    postCreateUser, getCreatePage, getUpdatePage, postHandleRemoveUser }
    = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.get('/update/:userId', getUpdatePage)


router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);

router.post('/delete-user/:userId', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);




module.exports = router; // export default 