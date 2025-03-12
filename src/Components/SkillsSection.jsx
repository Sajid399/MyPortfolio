import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";

const SkillsSection = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap",
    "GitHub", "MySQL", "PHP", "Laravel", "Node.js", "MongoDB",
  ];

  return (
    <section id="skills" className="container mx-auto px-6 md:px-[4rem] py-5 md:py-16 text-center">
      <div className="mx-auto">
        <Heading title={' Skills'} rotate={5} className={'text-3xl md:text-4xl'}/>


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
