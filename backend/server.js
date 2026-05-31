const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: ['https://creamersbakery.netlify.app/', 'http://localhost:5173'],
  credentials: true
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ Error:', err))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/products', require('./routes/products'))
app.use('/api/reviews', require('./routes/reviews'))
app.use('/api/custom-orders', require('./routes/customOrders'))
app.use('/api/orders', require('./routes/orders'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`))