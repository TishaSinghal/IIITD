import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          <a href={link}>{title}</a>
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <div>
        
        <div>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            Examine Data<span className='text-[#915EFF]'></span>
          </h1>
          <p className={`${styles.sectionSubText} mt-1 text-white-100`}>
            Lorem ipsum dolor sit. <br className='sm:block hidden' />
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index, link) => (
          <ServiceCard key={service.title} index={index} link={link} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "services");