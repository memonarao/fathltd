import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-indigo-950 px-4 sm:px-6 pt-32 pb-16 text-white relative text-center"
    >
      <div className="max-w-3xl w-full mx-auto">
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-orange-500 text-sm font-semibold tracking-wide text-orange-400"
        >
         Building Smarter Engineering
        </motion.div>

    
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Futuristic engineering <br className="hidden sm:block" />
            made practical
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
              Robotics, RFID, web & embedded systems — scalable solutions for
          real-world problems.
          </p>

          
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
            >
              MAKE INQUIRY
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
