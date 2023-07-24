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
 auth,
 authorizePermissions
} = require('../middleware/auth-JWT.js')

//............
//app
//............

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/users').get(getAllUsers)
router.route('/showMe').get(showCurrentUser)
router.route('/updatePass').patch(updatePassword)
router.route('/updateName').patch(updateName)
router.route('/users/:id').get(getSingleUser)

//............
//importing
//............
module.exports = router