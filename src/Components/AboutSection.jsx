import React from 'react';
import { motion } from 'framer-motion'
import Heading from './Heading';
const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-[6rem] py-5 md:py-16 text-center md:text-left">
      <div className=" mx-auto">
       
       <Heading title={' About Me'} rotate={-5} className={'text-3xl md:text-4xl'}/>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          I am a passionate <span className="text-blue-400">full stack developer</span> with a strong focus on crafting visually appealing, intuitive, and user-friendly web applications. I thrive on transforming complex ideas into clean, efficient, and dynamic code. My expertise spans HTML, CSS, JavaScript, React.js, and Tailwind CSS, Redux and ReduxToolkit empowering me to build scalable and maintainable solutions.
          <br /><br />
          Beyond frontend development, I have a solid background in backend technologies such as PHP, Laravel, Node.js, and MySQL. This comprehensive skill set enables me to develop robust full-stack applications that perform seamlessly on both client and server sides.
          <br /><br />
          I continually explore new technologies and design trends to stay ahead in the rapidly evolving world of web development. My goal is to create responsive, high-performance websites and applications that deliver engaging and memorable user experiences. Whether it's optimizing performance, enhancing usability, or integrating the latest design principles, I am dedicated to delivering exceptional digital solutions.
          <br /><br />
          With a keen eye for detail and a commitment to quality, I believe that every line of code has the power to transform ideas into reality. I am always excited to collaborate on innovative projects and bring creative visions to life.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
