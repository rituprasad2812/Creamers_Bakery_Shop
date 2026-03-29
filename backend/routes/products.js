const express = require('express')
const Product = require('../models/Product')

const router = express.Router()

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// GET products by category - MUST BE BEFORE /:id
router.get('/category/:category', async (req, res) => {
  const category = req.params.category
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
  const products = await Product.find({ category: formattedCategory })
  res.json(products)
})

// GET bestsellers only - MUST BE BEFORE /:id
router.get('/bestsellers', async (req, res) => {
  const products = await Product.find({ isBestseller: true })
  res.json(products)
})

// GET single product by ID - MUST BE LAST
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ msg: 'Product not found' })
    res.json(product)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ADD product
router.post('/add', async (req, res) => {
  const product = new Product(req.body)
  await product.save()
  res.json(product)
})

module.exports = router