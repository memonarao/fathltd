import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
      
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Get in touch</h3>
          <p className="text-slate-600 mb-6">
            Send us a short message and we will get back to you.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-slate-700 font-medium">Contact</p>
            <p className="text-sm text-slate-500 mt-2">📍 Lahore, Pakistan</p>
            <p className="text-sm text-slate-500">📞 +92 300 1234567</p>
            <p className="text-sm text-slate-500">✉️ info@taengineering.com</p>
          </div>
        </motion.div>

        
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow-sm border"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md shadow hover:scale-[1.02] transition-transform"
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
