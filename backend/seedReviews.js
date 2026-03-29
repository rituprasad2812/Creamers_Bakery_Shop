const mongoose = require('mongoose')
require('dotenv').config()
const Review = require('./models/Review')
const Product = require('./models/Product')

const seedReviews = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  
  // Get ALL products
  const products = await Product.find()
  
  console.log('Found products:', products.length)
  
  // Create reviews for EACH product
  const reviews = []
  
  const reviewTemplates = [
    { name: "Sarah Johnson", rating: 5, review: "Absolutely delicious! Best quality and taste. Will definitely order again!" },
    { name: "Rahul Sharma", rating: 5, review: "Fresh and perfectly made. My family loved it!" },
    { name: "Priya Patel", rating: 4, review: "Good taste and quality. Delivery was on time." },
    { name: "Amit Kumar", rating: 5, review: "Perfect for our celebration! Everyone loved it." },
    { name: "Neha Singh", rating: 5, review: "Amazing quality. Highly recommended!" },
    { name: "Vikram Reddy", rating: 4, review: "Good product, slightly pricey but worth it." },
    { name: "Sundar Shetty", rating: 4, review: "The taste of the cookies were finger licking good. perfect sweetness!!"},
  ]
  
  // Add 2-3 reviews to each product
  products.forEach((product, index) => {
    const numReviews = (index % 3) + 1  // 1, 2, or 3 reviews per product
    
    for (let i = 0; i < numReviews; i++) {
      const template = reviewTemplates[(index + i) % reviewTemplates.length]
      reviews.push({
        productId: product._id,
        name: template.name,
        rating: template.rating,
        review: template.review,
        createdAt: new Date(Date.now() - (i + 1) * 24 * 60 * 60 * 1000)  // 1, 2, 3 days ago
      })
    }
  })
  
  await Review.deleteMany({})
  await Review.insertMany(reviews)
  
  console.log(`✅ ${reviews.length} Reviews added for ${products.length} products!`)
  process.exit()
}

seedReviews()