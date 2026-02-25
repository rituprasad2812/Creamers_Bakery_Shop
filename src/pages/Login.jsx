import { scale } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Login = () => {
    return (
        <div class="flex">
            <div class="min-h-screen w-285 bg-[url('assets/contactbg.avif')] bg-no-repeat bg-cover">
            </div>

            <div class="bg-pink-200 w-145 border-l-2 border-amber-950 pt-20">
                <p class="font-playball font-semibold text-6xl text-center text-amber-950 ">Welcome Back to Creamers!</p>
                <p class="font-mitr text-amber-950 text-center pb-10 pt-2">Login to continue your sweet journey...</p>

                <div class="flex flex-col gap-5 items-center">
                    <label> Email: <br></br>
                        <input type="Email" placeholder="Your Email" class="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white" />
                    </label>
                    <label> Password: <br></br>
                        <input type="text" placeholder="Your Password" class="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white" />
                    </label>
                </div>
                <div class="text-center">
                    <motion.button class=" text-center text-lg font-medium bg-amber-950 text-white font-mitr rounded-3xl px-16 py-2 m-10 cursor-pointer border-2 border-amber-950"
                    whileHover={{backgroundColor: "white", color: "black", borderColor: "black"}}
                    whileTap={{scale: 0.7}}
                    >
                        Login
                        </motion.button>
                </div>
                <div class="flex justify-center items-center gap-3 pt-45">
                    <p class="font-mitr text-amber-950 ">Don't have an Account?</p>
                    <Link to="/signup">
                        <motion.div className="border-b text-pink-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >Create account
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login