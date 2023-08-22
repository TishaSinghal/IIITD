import { motion } from "framer-motion";

import { styles } from "../styles";

import React from "react";
import { Tilt } from "react-tilt";



import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-12 mx-auto`}>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-5xl leading-[30px] font-weight: 500'
      >     Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor error distinctio inventore enim tempore iusto a, itaque et suscipit autem quam doloribus quisquam. Est asperiores suscipit molestias necessitatibus pariatur quia praesentium voluptatum hic quaerat. Totam adipisci libero quo nostrum veritatis dignissimos facilis ipsum, modi ab consequuntur a nobis, neque error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut deserunt quod inventore suscipit exercitationem esse mollitia, sed laudantium vero necessitatibus beatae, nobis dolores. Nostrum, dolor maiores. Hic, ex 
      </motion.p>


      

      <div className='absolute mt-20 w-full flex justify-center items-center'>
        <a href='#services'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    
  );
};

export default SectionWrapper(Hero, "about");