import React from 'react'
import Navbar from '../components/section1/Navbar'
import { useParams } from 'react-router-dom'
import ItemCard from '../components/section3/ItemCard'
import Filters from '../components/Filters'

const MenuPage = () => {
  const { category } = useParams()
  
  return (
    <div>
      <Navbar variant="menu" categoryName={category} cartCount={3} />
      <Filters />
      <div class=" flex flex-wrap justify-evenly bg-white" >
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      </div>
    </div>
  )
}

export default MenuPage