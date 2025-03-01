import { motion } from "framer-motion";
import {  FaLinkedinIn,FaWhatsappSquare,FaGithub } from "react-icons/fa";
import useContentSection from "../Hooks/useContentSection";
import SocialLink from "./SocialLink";
import Heading from "./Heading";

const ContactSection = () => {
  const {handleChange,handleSubmit,formData,status} = useContentSection();
  return (
    <section id="contact" className="md:h-screen flex gap-16 flex-col md:flex-row justify-center items-center text-center md:text-left md:px-[6rem] px-8 py-8">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
         
          <Heading title={' DO YOU HAVE A PROJECT TO DISCUSS?'} rotate={-5} className={'md:text-[1.888rem]'}/>

          <p className="mt-3 text-xl font-semibold text-gray-400">GET IN TOUCH 💬</p>

          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-400">CONTACT</h3>
            <p className="text-blue-400">sajidbashir399@gmail.com</p>
            <p>03419319429</p>
          </div>

        
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-400">SOCIAL MEDIA</h3>
            <SocialLink />
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
              className="w-full py-2 md:py-3 rounded-md font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:shadow-lg"
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
