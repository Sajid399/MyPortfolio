import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Capture.jpg';
import Heading from './Heading';

const HeroSection = () => {
  return (
    <section className="md:h-screen flex gap-16 flex-col md:flex-row justify-center items-center text-center md:text-left px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <Heading title={'FRONTEND  DEVELOPER'} rotate={-5} />
        <p className="text-gray-400 text-lg mt-4">
          I am Sajid – a <span className="text-blue-400">web developer</span> with a passion for creating beautiful and responsive websites.
        </p>
        <motion.a
          href="#projects"
          className="inline-block mt-6 px-6 py-1 md:py-2 md:text-lg font-medium text-white border border-blue-400 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500  hover:shadow-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW MY WORK
        </motion.a>
      </motion.div>

      {/* Image */}
      <div className="relative flex justify-center items-center">
        {/* Animated Glowing Circle */}
        <motion.div
          className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-pink-400"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={heroImage}
          alt="Sajid"
          className="w-64 h-66 md:w-70 lg:w-66 rounded-full shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
