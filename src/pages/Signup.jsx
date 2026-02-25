import { scale } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Signup = () => {
    return (
        <div class="flex">
            <div class="min-h-screen w-285 bg-[url('assets/contactbg.avif')] bg-no-repeat bg-cover">
            </div>

            <div class="bg-pink-200 w-145 border-l-2 border-amber-950 pt-20">
                <p class="font-playball font-semibold text-6xl text-center text-amber-950 ">Time for Treats!</p>
                <p class="font-mitr text-amber-950 text-center pb-10 pt-2">Create an account to start ordering.</p>

                <div class="flex flex-col gap-5 items-center">
                    <label> Name: <br></br>
                        <input type="text" placeholder="Your Name" class="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white" />
                    </label>
                    <label> Email: <br></br>
                        <input type="Email" placeholder="Your Email" class="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white" />
                    </label>
                    <label> Password: <br></br>
                        <input type="password" placeholder="Your Password" class="h-10 w-100 border-2 rounded-2xl px-4 text-sm bg-white" />
                    </label>
                </div>
                <div class="text-center">
                    <motion.button class=" text-center text-lg font-medium bg-amber-950 text-white font-mitr rounded-3xl px-16 py-2 m-10 cursor-pointer border-2 border-amber-950"
                    whileHover={{backgroundColor: "white", color: "black", borderColor: "black"}}
                    whileTap={{scale: 0.7}}
                    >
                        Sign-up
                        </motion.button>
                </div>
                <div class="flex justify-center items-center gap-3 pt-40">
                    <p class="font-mitr text-amber-950 ">Already have an Account?</p>
                    <Link to="/login">
                        <motion.div className="border-b text-pink-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >Login to your account
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup