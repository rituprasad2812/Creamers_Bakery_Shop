import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password
      })
      
      login(res.data.user, res.data.token)
      alert('Account created successfully!')
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed. Please try again.')
    }
  }

  return (
    <div className="flex">
      <div className="min-h-screen w-285 bg-[url('assets/contactbg.avif')] bg-no-repeat bg-cover"></div>

      <div className="bg-pink-200 w-145 border-l-2 border-amber-950 pt-20">
        <p className="font-playball font-semibold text-6xl text-center text-amber-950">Time for Treats!</p>
        <p className="font-mitr text-amber-950 text-center pb-10 pt-2">Create an account to start ordering.</p>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mx-10 mb-4 text-center font-mitr">{error}</p>
        )}

        <form onSubmit={handleSignup}>
          <div className="flex flex-col gap-5 items-center">
            <label className="font-mitr text-amber-950">
              Name: <br />
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white focus:outline-none focus:border-pink-400" 
              />
            </label>
            <label className="font-mitr text-amber-950">
              Email: <br />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white focus:outline-none focus:border-pink-400" 
              />
            </label>
            <label className="font-mitr text-amber-950">
              Password: <br />
              <input 
                type="password" 
                placeholder="Your Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white focus:outline-none focus:border-pink-400" 
              />
            </label>
          </div>
          
          <div className="text-center">
            <motion.button 
              type="submit"
              className="text-center text-lg font-medium bg-amber-950 text-white font-mitr rounded-3xl px-16 py-2 m-10 cursor-pointer border-2 border-amber-950"
              whileHover={{ backgroundColor: "white", color: "black", borderColor: "black" }}
              whileTap={{ scale: 0.7 }}
            >
              Sign-up
            </motion.button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-3 pt-40">
          <p className="font-mitr text-amber-950">Already have an Account?</p>
          <Link to="/login">
            <motion.div 
              className="border-b text-pink-600 font-mitr cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login to your account
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup