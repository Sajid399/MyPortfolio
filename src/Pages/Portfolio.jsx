import React from "react";
import { motion } from "framer-motion";

import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillsSection from "../Components/SkillsSection";
import ProjectSections from "../Components/ProjectSections";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Portfolio = () => {
    return (
        <div id="home" className="font-sans bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSections />
                <ContactSection />
                <Footer />
            </motion.div>
        </div>
    );
};

export default Portfolio;
