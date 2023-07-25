//.........
//importing
//.........
const User = require('../models/UserModels.js')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors')

//....
//app
//....

//register
const registerUser = async (req, res) => {
 const {
  name,
  email,
  password
 } = req.body

 //checks(noName,email,password)
 if (!name || !email || !password) {
  throw new CustomError.BadRequestError('Please provide all values...')
 }
 //checks(email repeated)
 const emailAlreadyExists = await User.findOne({
  email
 })
 if (emailAlreadyExists) {
  throw new CustomError.BadRequestError('Email Already Exists')
 }
 //letSetFirstAccountIsAdmin
 const isFirstAccount = await User.countDocuments({}) === 0
 const role = isFirstAccount ? 'admin' : 'user'
 //creatingData(MongoDB)
 const user = await User.create({
  name,
  email,
  password,
  role
 })
 //createJWT
 const token = user.createJWT()
 res.status(StatusCodes.CREATED).json({
  user: {
   name: user.name,
   email: user.email,
   role: user.role
  },
  token
 })
}

//login
const loginUser = async (req, res) => {
 const {
  email,
  password
 } = req.body

 //check(no email,password)
 if (!email || !password) {
  throw new CustomError.BadRequestError("Please provide email and password")
 }
 //data(MongoDB)[Notes...PasswordSchema>>Select:false]so..selectPassword
 const user = await User.findOne({
  email
 }).select('+password')
 //check(ifEmailIsNotFound)
 if (!user) {
  throw new CustomError.UnauthenticatedError("Invalid Credentials")
 }
 //check(passwordIsCorrect)
 const isPasswordCorrect = await user.comparePassword(password)
 if (!isPasswordCorrect) {
  throw new CustomError.UnauthenticatedError('Invalid Credentials')
 }
 //JWT
 const token = user.createJWT()
 //displayPassword
 user.password = undefined;

 res.status(StatusCodes.OK).json({
  user,
  token
 })
}

//getAllUsers
const getAllUsers = async (req, res) => {
 res.send('getAllUsers')
}

//getSingleUser
const getSingleUser = async (req, res) => {
 res.send('getSingleUser')
}

//showCurrentUser
const showCurrentUser = async (req, res) => {
 res.send('ShowCurrentUser')
}

//updatePassword
const updatePassword = async (req, res) => {
 res.send('updatePassword')
}

//updateName
const updateName = async (req, res) => {
 res.send('updateName')
}

//.........
//exporting
//.........
module.exports = {
 registerUser,
 loginUser,
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updatePassword,
 updateName
}