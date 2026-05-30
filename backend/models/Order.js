const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  orderId: { type: String },
  userId: { type: String },
  items: [{
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    selectedOption: String,
    cakeName: String,
    image: String
  }],
  subtotal: Number,
  deliveryFee: Number,
  total: Number,
  customerName: String,
  phone: String,
  email: String,
  orderType: String,
  address: String,
  deliveryDate: String,
  deliveryTime: String,
  paymentMethod: String,
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Order', OrderSchema)