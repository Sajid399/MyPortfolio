import { motion } from "framer-motion";
import { projects } from "./Data";

const ProjectSections = () => {
  

  return (
    <section id="projects" className="container mx-auto px-6 md:px-[6rem] py-8">

      <motion.h1
        className="text-4xl md:text-5xl pb-6 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {projects?.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg cursor-pointer hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-54 object-cover rounded-md" />
            <div className="pb-3 px-3">
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSections;
