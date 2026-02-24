// Section5.jsx (Contact)
import React from 'react'
import { motion } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Section5 = () => {
  return (
    <FadeInSection className="min-h-screen w-full bg-pink-200 py-20">
      
      {/* Heading */}
      <h2 className="font-playball text-7xl text-amber-950 text-center mb-4 font-semibold">Get In Touch</h2>
      <p className="font-mitr text-amber-950 text-center mb-16">We'd Love to Hear From You</p>

      <div className="flex justify-center gap-20 flex-wrap px-10">
        
        {/* Left Side - Contact Cards */}
        <div className="flex flex-col gap-6">
          
          {/* Call */}
          <motion.div 
            className="flex items-center gap-5 bg-pink-100 px-8 py-5 rounded-2xl w-80 cursor-pointer border-2 border-amber-950"
            whileHover={{ scale: 1.05}}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faPhone} className="text-3xl text-pink-500" />
            <div>
              <h3 className="font-mitr font-bold text-amber-950">Call Us</h3>
              <p className="text-amber-800">+91 98765 43210</p>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div 
            className="flex items-center gap-5 bg-green-100 px-8 py-5 rounded-2xl w-80 cursor-pointer border-2 border-amber-950"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl text-green-500" />
            <div>
              <h3 className="font-mitr font-bold text-amber-950">WhatsApp</h3>
              <p className="text-amber-800">+91 98765 43210</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="flex items-center gap-5 bg-blue-100 px-8 py-5 rounded-2xl w-80 cursor-pointer border-2 border-amber-950"
            whileHover={{ scale: 1.05}}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-blue-500" />
            <div>
              <h3 className="font-mitr font-bold text-amber-950">Email Us</h3>
              <p className="text-amber-800">hellocreamers@gmail.com</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            className="flex items-center gap-5 bg-orange-100 px-8 py-5 rounded-2xl w-80 cursor-pointer border-2 border-amber-950"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-3xl text-orange-500" />
            <div>
              <h3 className="font-mitr font-bold text-amber-950">Visit Us</h3>
              <p className="text-amber-800">Shop no. 2, Ratanami Complex, Oppo. Hanuman Mandir, Vapi</p>
            </div>
          </motion.div>

        </div>

        {/* Right Side - Map or Image */}
        <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjUiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

      </div> 

      {/* Footer */}
      <div className="text-center mt-20 text-amber-950 font-mitr">
        <p>© 2024 Creamers Bakery. Made with 🤎</p>
      </div>

    </FadeInSection>
  )
}

export default Section5