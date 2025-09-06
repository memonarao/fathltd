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
    <footer className="bg-white border-t border-slate-100 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        <div>
          <h4 className="font-bold text-slate-900">TA Engineering</h4>
          <p className="text-sm text-slate-600">
            Robotics • RFID • Web • Embedded Systems
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <p className="text-sm text-slate-600">📍 Karachi, Pakistan</p>
          <p className="text-sm text-slate-600">
            📞{" "}
            <a
              href="tel:+920000000000"
              className="hover:text-blue-600"
            >
              +92 0000000000
            </a>
          </p>
          <p className="text-sm text-slate-600">
            ✉️{" "}
            <a
              href="mailto:taengineering@gmail.com"
              className="hover:text-blue-600"
            >
              taengineering@gmail.com
            </a>
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-slate-400">
        © 2025 TA Engineering. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
