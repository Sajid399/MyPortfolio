import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Heading from "./Heading";
import useTheme from "../Hooks/useTheme";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="p-4 w-full flex justify-between items-center container py-6 mx-auto sticky top-0 z-50 bg-[#101828]  rounded-lg shadow-xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Heading title={' SRS SAJID'} rotate={5} className="text-2xl"/>

            <div className="hidden md:flex space-x-8 text-white">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative font-semibold px-3 py-1"
                        whileHover={{ scale: 1.1, color: "#38bdf8" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item}
                        <motion.div
                            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 origin-left scale-x-0"
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                ))}
            </div>

            <motion.button
                className="hidden md:flex items-center px-4 py-1 rounded-full bg-transparent border-2 border-pink-500 text-white text-sm font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-black"
                whileHover={{ scale: 1.1 }}
                onClick={toggleTheme}
            >
                {/* SRS <FaGlobe className="ml-2 text-lg" /> */}
                {theme === "dark" ? <BsSun size={20} /> : <BsMoon
                 size={20} />}
            </motion.button>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes className="text-2xl text-white" /> : <FaBars className="text-2xl text-white" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-80  md:hidden h-full bg-[#101828] flex flex-col items-center justify-center space-y-6 text-white text-lg z-50 "
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.5 }}
                    >
                        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-semibold hover:text-blue-400 transition"
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setIsOpen(false)} 
                            >
                                {item}
                            </motion.a>
                        ))}

                        {/* <button
                            onClick={() => setIsOpen(false)}
                            className="text-xl text-gray-300 hover:text-red-400"
                        >
                            Close Menu
                        </button> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
