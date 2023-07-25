//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 registerUser,
 loginUser,
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updatePassword,
 updateName
} = require('../Controllers/UserController.js')

const {
 auth
} = require('../middleware/auth-JWT.js')

//............
//app
//............

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/users').get(auth, getAllUsers)
router.route('/showMe').get(auth, showCurrentUser)
router.route('/updatePass').patch(auth, updatePassword)
router.route('/updateName').patch(updateName)
router.route('/users/:id').get(auth, getSingleUser)

//............
//importing
//............
module.exports = router