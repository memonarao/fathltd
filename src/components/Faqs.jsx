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

function Faqs() {
  const faqs = [
    {
      q: "What technologies do you use?",
      a: "I work with React, Tailwind CSS, Node.js, SQL, and modern deployment tools.",
    },
    {
      q: "Do you take freelance projects?",
      a: "Yes, I’m open to freelance opportunities depending on project scope and timeline.",
    },
    {
      q: "What kind of projects have you built?",
      a: "I’ve built web apps, dashboards, automation tools, and hardware-integrated systems.",
    },
    {
      q: "How can I contact you?",
      a: "You can reach out via the contact section of this site or through LinkedIn/Email.",
    },
    {
      q: "Do you work with teams?",
      a: "Yes, I enjoy collaborating on projects using Git, Agile practices, and CI/CD pipelines.",
    },
    {
      q: "Are your projects open source?",
      a: "Some of them are open source on GitHub, while others are private client work.",
    },
  ];

  return (
    <section
      id="faqs"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-indigo-950 px-4 sm:px-6 pt-32 pb-16 text-white relative text-center"
    >
      <div className="max-w-6xl mx-auto">
       
        <motion.h2
          className="text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>

      
        <motion.div
          className="grid md:grid-cols-2 gap-8 text-left"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: false, amount: 0.3 }}
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-md"
            >
              <h4 className="text-lg font-semibold text-white">{item.q}</h4>
              <p className="mt-2 text-slate-300">{item.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Faqs;
