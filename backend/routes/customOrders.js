const express = require('express')
const CustomOrder = require('../models/CustomOrder')

const router = express.Router()

// POST new custom order
router.post('/', async (req, res) => {
  try {
    const customOrder = new CustomOrder(req.body)
    await customOrder.save()
    res.json(customOrder)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET all custom orders
router.get('/', async (req, res) => {
  try {
    const orders = await CustomOrder.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router