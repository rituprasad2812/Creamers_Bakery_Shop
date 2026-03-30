const mongoose = require('mongoose')

const CustomOrderSchema = new mongoose.Schema({
  orderType: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  size: { type: String, required: true },
  flavor: { type: String, required: true },
  floors: { type: String, required: true },
  addOns: [{ type: String }],
  doNotInclude: { type: String },
  theme: { type: String, required: true },
  colors: { type: String, required: true },
  total: { type: Number, required: true },
  downPayment: { type: Number, required: true },
  balance: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('CustomOrder', CustomOrderSchema)