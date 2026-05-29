const express = require('express')
const Order = require('../models/Order')

const router = express.Router()

// POST new order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body)
    await order.save()
    res.json(order)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router