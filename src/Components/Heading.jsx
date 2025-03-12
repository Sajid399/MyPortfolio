import React from 'react'
import { motion } from 'framer-motion';

const Heading = ({ title, rotate ,className}) => {
  return (
    <motion.h1
      className={`uppercase font-bold bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 text-transparent bg-clip-text text-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, rotate: rotate }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h1>
  )
}

export default Heading