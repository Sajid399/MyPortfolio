import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mx-4">
          <div className="mb-6 md:mb-0 text-center md:text-left">
           
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              My Portfolio
            </motion.h1>
            <p className="text-sm mt-2">
              Building beautiful web experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/sajid-bashir-5548aa259"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/Sajid399"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>

          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Designed & Developed by Sajid Bashir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
