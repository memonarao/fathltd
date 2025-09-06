import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-10"
    >
    
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-10 w-72 h-48 bg-gradient-to-tr from-blue-200/60 to-blue-400/30 rounded-3xl blur-3xl opacity-80 animate-[floatA_6s_ease-in-out_infinite]" />
        <div className="absolute right-6 top-20 w-60 h-36 bg-gradient-to-tr from-cyan-100/60 to-blue-300/30 rounded-3xl blur-3xl opacity-70 animate-[floatB_5s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-100/50 to-blue-200/30 rounded-full blur-2xl opacity-60 animate-[floatB_7s_ease-in-out_infinite]" />
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <p className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-600 text-sm font-medium mb-6 shadow-sm">
          ⚡ Building Smarter Engineering
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Futuristic engineering,{" "}
          <span className="text-blue-600">made practical</span>.
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Robotics, RFID, web & embedded systems — scalable solutions for
          real-world problems.
        </p>

       
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:scale-[1.02] transition-transform"
          >
            Our Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-blue-200 text-blue-600 bg-white/70 hover:bg-white"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
