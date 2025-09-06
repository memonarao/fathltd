import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-md border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              About TA Engineering
            </h2>
            <p className="text-slate-700 mb-4">
              We design and build robotics, RFID systems, and scalable software.
              Our approach blends practical engineering with modern tooling —
              ensuring products are production-ready, maintainable, and secure.
            </p>
            <ul className="grid gap-2">
              <li className="text-slate-600">• Research & prototyping</li>
              <li className="text-slate-600">• Embedded & cloud integration</li>
              <li className="text-slate-600">• Robust testing & deployment</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6-8JbO_olZ0-Aeo56r369wKw-nrwVYGe2v2VBdYF7aeMpMG9MrgAUfmi2li9K3BxP8o&usqp=CAU"
            alt="Robotics"
            className="rounded-2xl shadow-lg border"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
