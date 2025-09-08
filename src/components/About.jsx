import React from "react";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-indigo-950 px-4 sm:px-6 pt-32 pb-16 text-white relative text-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

       
        <motion.h2
          className="text-3xl font-bold text-white mb-8 col-span-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          About TA Engineering
        </motion.h2>

      
      
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-md text-left text-white"
          >
            <p className="mb-4 text-slate-200">
              We design and build robotics, RFID systems, and scalable software.
              Our approach blends practical engineering with modern tooling —
              ensuring products are production-ready, maintainable, and secure.
            </p>
            <ul className="grid gap-2 text-slate-300 list-disc list-inside">
              <li>Research & prototyping</li>
              <li>Embedded & cloud integration</li>
              <li>Robust testing & deployment</li>
            </ul>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="flex justify-center items-center h-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6-8JbO_olZ0-Aeo56r369wKw-nrwVYGe2v2VBdYF7aeMpMG9MrgAUfmi2li9K3BxP8o&usqp=CAU"
            alt="Robotics"
            className="w-full max-w-lg rounded-2xl shadow-lg border border-slate-700"
          />
        </motion.div>
      </div>
    </section>
  );
}


export default About;
