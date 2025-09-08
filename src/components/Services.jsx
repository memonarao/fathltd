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

function Services() {
  const services = [
    {
      title: "Line Follower Robots (LFR)",
      desc: "Autonomous LFRs for automation & competition.",
    },
    {
      title: "RFID Systems",
      desc: "Asset tracking & identification solutions.",
    },
    {
      title: "Web Development",
      desc: "Responsive web apps & dashboards.",
    },
    {
      title: "DevOps",
      desc: "CI/CD pipelines, infra as code, orchestration.",
    },
    {
      title: "Game Development",
      desc: "2D/3D interactive experiences.",
    },
    {
      title: "Custom Engineering",
      desc: "IoT, embedded systems & prototypes.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-indigo-950 px-4 sm:px-6 pt-32 pb-16 text-white relative text-center"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Services
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 30px rgba(14,165,233,0.12)",
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="relative bg-slate-900/80 border border-slate-700 backdrop-blur-lg rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h4 className="text-lg font-semibold text-white">{s.title}</h4>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <div className="mt-4">
                <button className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;