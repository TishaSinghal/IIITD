import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_utrpdmd',
        'template_ypsq3eb' ,
        {
          from_name: form.name,
          to_name: "Tisha Singhal",
          from_email: form.email,
          to_email: "tishasinghal8@gmail.com",
          message: form.message,
        },
        'OGfdZzWdzja9_ExGv'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 xl:h-screen flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 '// bg-black-100 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get to know</p>
        <h3 className={styles.sectionHeadText}>MagniEarth</h3>
        <p className={styles.sectionSubText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum et autem officia repellat vero assumenda fugiat, deserunt eum sunt!</p>  
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};



export default SectionWrapper(Contact,"");