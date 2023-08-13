//............
//importing
//............
const Product = require('../models/ProductModels.js')
const {
 StatusCodes
} = require('http-status-codes')
const CustomError = require('../errors')
const path = require('path')

//............
//App
//............
//createProduct
const createProduct = async (req, res) => {
 res.send('create product')
}

//getAllProducts
const getAllProducts = async (req, res) => {
 res.send('get all products')
}

//getSingleProduct
const getSingleProduct = async (req, res) => {
 res.send('get single product')
}

//updateProduct
const updateProduct = async (req, res) => {
 res.send('update product')
}

//deleteProduct
const deleteProduct = async (req, res) => {
 res.send('delete Product')
}

//updateImage
const uploadImage = async (req, res) => {
 if (!req.files) {
  throw new CustomError.BadRequestError('No file upload')
 }
}

//............
//exporting
//............
module.exports = {
 createProduct,
 getAllProducts,
 getSingleProduct,
 updateProduct,
 deleteProduct,
 uploadImage
}