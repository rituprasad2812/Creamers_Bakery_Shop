const express = require('express')
const Review = require('../models/Review')

const router = express.Router()

// GET all reviews (for homepage)
router.get('/all', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).limit(7)
    res.json(reviews)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET reviews for a specific product
router.get('/product/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 })
    res.json(reviews)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST new review
router.post('/', async (req, res) => {
  try {
    console.log('Received review:', req.body)  // Add this for debugging
    const review = new Review(req.body)
    await review.save()
    console.log('Review saved:', review)  // Add this for debugging
    res.json(review)
  } catch (err) {
    console.log('Error saving review:', err)  // Add this for debugging
    res.status(400).json({ error: err.message })
  }
})

module.exports = router