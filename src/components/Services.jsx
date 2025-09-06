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

function Services() {
  const services = [
    { title: "Line Follower Robots (LFR)", desc: "Autonomous LFRs for automation & competition." },
    { title: "RFID Systems", desc: "Asset tracking & identification solutions." },
    { title: "Web Development", desc: "Responsive web apps & dashboards." },
    { title: "DevOps", desc: "CI/CD pipelines, infra as code, orchestration." },
    { title: "Game Development", desc: "2D/3D interactive experiences." },
    { title: "Custom Engineering", desc: "IoT, embedded systems & prototypes." },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Services</h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(14,165,233,0.12)" }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative bg-white rounded-xl p-6 border shadow-sm"
            >
              <h4 className="text-lg font-semibold text-slate-900">{s.title}</h4>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-4">
                <button className="px-3 py-1 text-sm rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white">
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
