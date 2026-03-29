import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/section1/Navbar'
import ItemCard from '../components/section3/ItemCard'
import axios from 'axios'

const MenuPage = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`http://localhost:5000/api/products/category/${category}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [category])

  return (
    <div className="min-h-screen bg-pink-100">
      <Navbar variant="menu" categoryName={category.charAt(0).toUpperCase() + category.slice(1)} />

      <div className="p-10">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ItemCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuPage