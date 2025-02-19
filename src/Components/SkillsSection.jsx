import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS","Bootstrap",
    "GitHub", "MySQL", "PHP", "Laravel", "Node.js","MongoDb",
  ];

  return (
    <section id="skills" className="container mx-auto px-6 md:px-[6rem] py-16 text-center">
      <div className=" mx-auto">       
        <motion.h1
          className="text-4xl md:text-5xl pb-6 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Skills
        </motion.h1>

        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {skills?.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-800 p-4 rounded-lg text-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#4A5568" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
