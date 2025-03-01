import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import SocialLink from './SocialLink';
import Heading from './Heading';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mx-4">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Heading title={'Sajid Portfolio'} rotate={5} className={'text-2xl'}/>
            <p className="text-sm mt-2">
              Building beautiful web experiences.
            </p>
          </div>
          <SocialLink />
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
