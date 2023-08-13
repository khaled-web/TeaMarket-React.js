//............
//importing
//............
const mongoose = require('mongoose')

//............
//App
//............
const ProductSchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,
  required: [true, 'Please provide product name'],
  maxLength: [100, 'Name can not be more than 100 characters']
 },
 price: {
  type: Number,
  required: [true, 'Please provide product price'],
  default: 0
 },
 image: {
  type: String,
  default: '/uploads/example.jpeg'
 },
 user: {
  type: mongoose.Types.ObjectId,
  ref: 'User',
  required: true
 }
}, {
 timestamps: true
})

//............
//exporting
//............
module.exports = mongoose.model('Product', ProductSchema)