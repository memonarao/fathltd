import React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

function Projects() {
    const projects = [
        { title: "Smart RFID System", img: "https://cdn.cloudbf.com/thumb/format/mini_xsize/upfile/105/product_o/Factory-Directly-Door-Access-Control-System-Fixed-125Khz-ID-Smart-Wiegand-RFID-Chip-QR-Code-Reader.jpg.webp", desc: "Warehouse tracking with analytics." },
        { title: "Line Following Robot", img: "https://www.raypcb.com/wp-content/uploads/2023/02/line-following-robots.jpg", desc: "Precision navigation for industrial tasks." },
        { title: "Analytics Dashboard", img: "https://images.ctfassets.net/dfcvkz6j859j/1MEC1Kc2RFOGvh79IM5WIc/21cb143513d1cc92a717df20120bd79b/SEO-Dashboard-Template-Example.png", desc: "Real-time telemetry & insights." },
        { title: "AR Simulation", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTlt4LudeXcNURqsJy-Cqk6ujXWOOfePrNw&s", desc: "Immersive training simulations." },
        { title: "E-commerce Platform", img: "https://reallygooddesigns.com/wp-content/uploads/2024/11/best-ecommerce-website-design.webp", desc: "Secure online commerce system." },
        { title: "CI/CD Automation", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbYFzpqHQfeWpbn8mKPpUkZfxNvrX4Ive1w&s", desc: "Automated release pipelines." },
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-bold text-slate-900">Projects</h3>

                </div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="show"
                    variants={container}
                    viewport={{ once: true }}
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.35 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border"
                        >
                            <div className="relative">
                                <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
                                <p className="text-slate-600 mt-2">{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
