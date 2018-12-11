const mongoose = require('mongoose')

// define schema for post documents so these properties will be saved to the collection in the mongodb database
const OrderSchema = new mongoose.Schema({
  email: String,
  coffeetype: String,
  flavor: String,
  size: String,
  strength: Number
})

const CoffeeOrder = mongoose.model('CoffeeOrder',OrderSchema)

module.exports = CoffeeOrder
