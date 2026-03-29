import React from 'react'
import Navbar from '../components/section1/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart()
  const deliveryFee = 50

  // Get label based on category
  const getOptionLabel = (category) => {
    switch(category) {
      case 'Cakes': return 'Size'
      case 'Breads': return 'Type'
      case 'Cookies': return 'Pack'
      case 'Pastries': return 'Size'
      default: return 'Option'
    }
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar variant="menu" categoryName="Your Cart" cartCount={cartCount} />

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-6xl mb-4">🛒</p>
          <h2 className="font-playball text-4xl text-amber-950 mb-4">Your Cart is Empty</h2>
          <p className="font-mitr text-gray-600 mb-8">Start shopping to add items!</p>
          <Link to="/">
            <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-mitr hover:bg-pink-500">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-10">
          
          <div className="space-y-4 mb-10">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-md">
                
                <div className="flex items-center gap-6">
                  <div 
                    className="w-24 h-24 rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(/assets/${item.image})` }}
                  />
                  <div>
                    <h3 className="font-mitr text-xl font-bold text-amber-950">{item.name}</h3>
                    
                    {/* Show selected option (Size/Type/Pack) */}
                    <p className="text-gray-600 font-mitr">
                      {getOptionLabel(item.category)}: {item.selectedOption}
                    </p>
                    
                    {/* Show cake name if exists */}
                    {item.cakeName && (
                      <p className="text-pink-500 font-mitr text-sm">
                        Name: "{item.cakeName}"
                      </p>
                    )}
                    
                    <p className="text-pink-500 font-bold text-lg mt-1">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 border-2 border-pink-300 rounded-full px-4 py-2">
                    <button 
                      onClick={() => updateQuantity(item._id, item.selectedOption, item.quantity - 1)}
                      className="text-xl font-bold text-pink-500 hover:text-pink-700"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item._id, item.selectedOption, item.quantity + 1)}
                      className="text-xl font-bold text-pink-500 hover:text-pink-700"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item._id, item.selectedOption)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-xl" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="space-y-3 font-mitr text-lg">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span className="font-bold">₹{deliveryFee}</span>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex justify-between text-2xl font-bold text-amber-950">
                <span>Total:</span>
                <span>₹{cartTotal + deliveryFee}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Link to="/" className="flex-1">
                <button className="w-full bg-gray-200 text-amber-950 py-3 rounded-full font-mitr hover:bg-gray-300">
                  Continue Shopping
                </button>
              </Link>
              <Link to="/checkout" className="flex-1">
                <button className="w-full bg-pink-400 text-white py-3 rounded-full font-mitr hover:bg-pink-500">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default Cart