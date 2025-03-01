import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const SocialLink = () => {
  return (
    <div className="flex  space-x-6 gap-4 mt-2">
    {[
      {
        href: "https://www.linkedin.com/in/sajid-bashir-5548aa259",
        icon: <FaLinkedinIn className="text-2xl" />,
        hoverColor: "text-blue-400",
      },
     
      {
        href: "https://github.com/Sajid399",
        icon: <FaGithub className="text-2xl" />,
        hoverColor: "text-gray-400",
      },
    ].map((item, index) => (
      <motion.a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer ${item.hoverColor}`}
        whileHover={{ scale: 1.3, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {item.icon}
      </motion.a>
    ))}
  </div>
  )
}

export default SocialLink