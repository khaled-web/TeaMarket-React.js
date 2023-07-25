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
 const users = await User.find({
  role: 'user'
 }).select('-password')

 res.status(StatusCodes.OK).json({
  users
 })
}

//getSingleUser
const getSingleUser = async (req, res) => {
 const user = await User.findOne({
  _id: req.params.id
 }).select('-password')
 //check(UserNotFound)
 if (!user) {
  throw new CustomError.NotFoundError(`no user with id ${req.params.id}`)
 }

 res.status(StatusCodes.OK).json({
  user
 })
}

//showCurrentUser
const showCurrentUser = async (req, res) => {
 res.status(StatusCodes.OK).json({
  user: req.user
 })
}

//updatePassword
const updatePassword = async (req, res) => {
 const {
  oldPassword,
  newPassword
 } = req.body
 //check
 if (!oldPassword || !newPassword) {
  throw new CustomError.BadRequestError('Please provide both values')
 }
 //selectAccount
 const user = await User.findOne({
  _id: req.user.userId
 }).select('+password')
 //comparePassword
 const isPasswordCorrect = await user.comparePassword(oldPassword)
 if (!isPasswordCorrect) {
  throw new CustomError.UnauthenticatedError('Invalid Credentials')
 }

 user.password = newPassword

 //toKeepHashPassword
 await user.save()

 res.status(StatusCodes.OK).json({
  msg: 'Success!Password Updated'
 })
}

//updateName,email
const updateName = async (req, res) => {
 const {
  email,
  name
 } = req.body
 //check
 if (!email || !name) {
  throw new CustomError.BadRequestError('Please provide all values')
 }
 //GetData(MongoDB)
 const user = await User.findOne({
  _id: req.user.userId
 })
 //setAnewData
 user.name = name
 user.email = email
 //saveNewData
 await user.save()
 //createJWt
 const token = user.createJWT()

 res.status(StatusCodes.OK).json({
  user,
  token
 })
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