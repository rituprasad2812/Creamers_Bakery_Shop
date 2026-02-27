import Navbar from '../components/section1/Navbar'
import { useParams } from 'react-router-dom'

const MenuPage = () => {
  const { category } = useParams()
  
  return (
    <div>
      <Navbar variant="menu" categoryName={category.toUpperCase()} cartCount={3} />
      
      {/* Your products grid */}
    </div>
  )
}