const express = require('express')
const Order = require('../models/Order')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const count = await Order.countDocuments()
    const orderId = `CRM-2025-${String(count + 1).padStart(5, '0')}`
    
    const order = new Order({ ...req.body, orderId })
    await order.save()
    res.json(order)
  } catch (err) {
    console.log('Error:', err.message)
    res.status(400).json({ error: err.message })
  }
})

router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId })
    if (!order) return res.status(404).json({ msg: 'Order not found' })
    res.json(order)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router