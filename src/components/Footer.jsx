import React from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-900 to-indigo-950 py-10 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 ">

        <div>
          <h4 className="font-bold text-white">TA Engineering</h4>
          <p className="text-sm text-slate-300 mt-1">
            Robotics • RFID • Web • Embedded Systems
          </p>
        </div>


        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
       
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-sm text-slate-300">📍 Karachi, Pakistan</p>
          <p className="text-sm text-slate-300">
            📞{" "}
            <a
              href="tel:+920000000000"
              className="hover:text-indigo-400 transition-colors"
            >
              +92 0000000000
            </a>
          </p>
          <p className="text-sm text-slate-300">
            ✉️{" "}
            <a
              href="mailto:taengineering@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              taengineering@gmail.com
            </a>
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-400">
        © 2025 TA Engineering. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
