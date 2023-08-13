//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 createProduct,
 getAllProducts,
 getSingleProduct,
 updateProduct,
 deleteProduct,
 uploadImage
} = require('../Controllers/ProductController')
const {
 auth
} = require('../middleware/auth-JWT')

//............
//App
//............
router.route('/').post(auth, createProduct)
router.route('/').get(auth, getAllProducts)
router.route('/:id').get(auth, getSingleProduct)
router.route('/:id').patch(auth, updateProduct)
router.route('/:id').delete(auth, deleteProduct)
router.route('/uploadImage').post(uploadImage)

//............
//exporting
//............
module.exports = router