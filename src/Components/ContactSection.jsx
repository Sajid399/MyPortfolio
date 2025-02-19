import { motion } from "framer-motion";
import {  FaLinkedinIn,FaWhatsappSquare,FaGithub } from "react-icons/fa";
import useContentSection from "../Hooks/useContentSection";

const ContactSection = () => {
  const {handleChange,handleSubmit,formData,status} = useContentSection();
  return (
    <section id="contact" className="h-screen flex gap-16 flex-col md:flex-row justify-center items-center text-center md:text-left ">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            DO YOU HAVE A PROJECT TO DISCUSS?
          </motion.h1>

          <p className="mt-3 text-xl font-semibold text-gray-400">GET IN TOUCH 💬</p>

          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-400">CONTACT</h3>
            <p className="text-blue-400">sajidbashir399@gmail.com</p>
          </div>

        
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-400">SOCIAL MEDIA</h3>
            <div className="flex gap-4 mt-2">
              {[
                {
                  href: "https://www.linkedin.com/in/sajid-bashir-5548aa259",
                  icon: <FaLinkedinIn className="text-2xl" />,
                  hoverColor: "text-blue-400",
                },
                {
                  href: "https://wa.me/923419319429",
                  icon: <FaWhatsappSquare className="text-2xl" />,
                  hoverColor: "text-green-400",
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
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400">CONTACT FORM</h3>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
           required
           />
            <textarea
            required
            name="message"
             value={formData.message}
             onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 h-32 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              type="submit"
              className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND
            </motion.button>
          </form>
          {status && <p className="mt-3 text-center text-white">{status}</p>}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
