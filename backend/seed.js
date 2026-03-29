const mongoose = require('mongoose')
require('dotenv').config()
const Product = require('./models/Product')

const products = [
  // CAKES (8 products)
  { name: "Chocolate Truffle Cake", category: "Cakes", price: 500, image: "chocolate-cake.avif", isBestseller: true },
  { name: "Red Velvet Cake", category: "Cakes", price: 600, image: "red-velvet.avif", isBestseller: true },
  { name: "Vanilla Sponge Cake", category: "Cakes", price: 450, image: "vanilla-cake.jpg", isBestseller: false },
  { name: "Strawberry Cake", category: "Cakes", price: 550, image: "strawberry-cake.jpg", isBestseller: false },
  { name: "Butterscotch Cake", category: "Cakes", price: 500, image: "butterscotch-cake.jpg", isBestseller: true },
  { name: "Pineapple Cake", category: "Cakes", price: 480, image: "pineapple-cake.jpg", isBestseller: false },
  { name: "Black Forest Cake", category: "Cakes", price: 650, image: "black-forest.jpg", isBestseller: true },
  { name: "Mango Cake", category: "Cakes", price: 520, image: "mango-cake.jpg", isBestseller: false },

  // BREADS (8 products)
  { name: "Sourdough Bread", category: "Breads", price: 200, image: "sourdough.jpg", isBestseller: true },
  { name: "French Baguette", category: "Breads", price: 150, image: "baguette.jpg", isBestseller: true },
  { name: "Whole Wheat Bread", category: "Breads", price: 120, image: "wheat-bread.jpg", isBestseller: false },
  { name: "Garlic Bread", category: "Breads", price: 180, image: "garlic-bread.jpg", isBestseller: true },
  { name: "Focaccia Bread", category: "Breads", price: 220, image: "focaccia.jpg", isBestseller: false },
  { name: "Ciabatta Bread", category: "Breads", price: 190, image: "ciabatta.jpg", isBestseller: false },
  { name: "Multigrain Bread", category: "Breads", price: 160, image: "multigrain.jpg", isBestseller: false },
  { name: "Brioche Bread", category: "Breads", price: 250, image: "brioche.jpg", isBestseller: false },

  // COOKIES (8 products)
  { name: "Chocolate Chip Cookie", category: "Cookies", price: 50, image: "choco-cookie.jpg", isBestseller: true },
  { name: "Oatmeal Raisin Cookie", category: "Cookies", price: 45, image: "oatmeal-cookie.jpg", isBestseller: false },
  { name: "Peanut Butter Cookie", category: "Cookies", price: 55, image: "peanut-cookie.jpg", isBestseller: true },
  { name: "Sugar Cookie", category: "Cookies", price: 40, image: "sugar-cookie.jpg", isBestseller: false },
  { name: "Double Choco Cookie", category: "Cookies", price: 60, image: "double-choco.jpg", isBestseller: false },
  { name: "Almond Cookie", category: "Cookies", price: 65, image: "almond-cookie.jpg", isBestseller: false },
  { name: "Coconut Cookie", category: "Cookies", price: 50, image: "coconut-cookie.jpg", isBestseller: false },
  { name: "Brownie Cookie", category: "Cookies", price: 70, image: "brownie-cookie.avif", isBestseller: false },

  // PASTRIES (8 products)
  { name: "Butter Croissant", category: "Pastries", price: 120, image: "croissant.avif", isBestseller: true },
  { name: "Danish Pastry", category: "Pastries", price: 100, image: "danish.avif", isBestseller: false },
  { name: "Apple Turnover", category: "Pastries", price: 130, image: "apple-turnover.webp", isBestseller: true },
  { name: "Cinnamon Roll", category: "Pastries", price: 110, image: "cinnamon-roll.avif", isBestseller: true },
  { name: "Eclair", category: "Pastries", price: 140, image: "eclair.avif", isBestseller: false },
  { name: "Fruit Tart", category: "Pastries", price: 160, image: "fruit-tart.avif", isBestseller: false },
  { name: "Palmier", category: "Pastries", price: 90, image: "palmier.avif", isBestseller: false },
  { name: "Pain au Chocolat", category: "Pastries", price: 135, image: "pain-chocolat.avif", isBestseller: false }
]

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected')
    await Product.deleteMany({})
    await Product.insertMany(products)
    console.log('32 Products added!')
    process.exit()
  })
  .catch(err => console.log('Error:', err))