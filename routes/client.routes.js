const express= require('express');
const router = express.Router();
const { getAllUsers, deleteUser, disableUser, getUserById, updateAccount } = require('../controllers/client.controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { isAuth } = require('../middlewares/isAuth');

router.get('/getUsers',isAdmin,getAllUsers)
router.get('/getUserById/:ClientID',isAuth,getUserById)
router.delete('/deleteUser/:ClientID',isAdmin,deleteUser)
router.put('/disableUser/:ClientID',isAdmin,disableUser)
router.put('/updateAccount',isAuth,updateAccount)

module.exports = router