const mongoose = require('mongoose')
require('dotenv').config()
const Product = require('./models/Product')

const products = [
  { name: "Chocolate Cake", category: "Cakes", price: 500, image: "chocolate-cake.jpg", isBestseller: true },
  { name: "Red Velvet Cake", category: "Cakes", price: 600, image: "red-velvet.jpg", isBestseller: true },
  { name: "Vanilla Cupcake", category: "Cakes", price: 150, image: "vanilla-cupcake.jpg", isBestseller: false },
  { name: "Croissant", category: "Pastries", price: 120, image: "croissant.jpg", isBestseller: true },
  { name: "Danish Pastry", category: "Pastries", price: 100, image: "danish.jpg", isBestseller: false },
  { name: "Sourdough Bread", category: "Breads", price: 200, image: "sourdough.jpg", isBestseller: true },
  { name: "Baguette", category: "Breads", price: 150, image: "baguette.jpg", isBestseller: false },
  { name: "Chocolate Chip Cookie", category: "Cookies", price: 50, image: "choco-cookie.jpg", isBestseller: true },
  { name: "Oatmeal Cookie", category: "Cookies", price: 45, image: "oatmeal-cookie.jpg", isBestseller: false }
]

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected')
    await Product.deleteMany({})
    await Product.insertMany(products)
    console.log('✅ Products added!')
    process.exit()
  })
  .catch(err => console.log('❌ Error:', err))