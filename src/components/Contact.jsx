import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-indigo-950 px-4 sm:px-6 pt-32 pb-16 text-white relative text-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start text-left">
       
      
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Get in touch</h3>
          <p className="text-slate-300 mb-6">
            Send us a short message and we’ll get back to you shortly.
          </p>

          <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 shadow-md border border-slate-700">
            <p className="text-slate-200 font-semibold text-lg">Contact</p>
            <p className="text-sm text-slate-400 mt-2">📍 Karachi, Pakistan</p>
            <p className="text-sm text-slate-400">📞 +920000000</p>
            <p className="text-sm text-slate-400">✉️  taengineering@gmail.com</p>
          </div>

        </motion.div>

      
      
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-900/80 backdrop-blur-lg rounded-xl p-6 shadow-md border border-slate-700"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium text-white">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 bg-slate-800 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-1 p-3 bg-slate-800 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white">Message</label>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full mt-1 p-3 bg-slate-800 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
export default Contact;
