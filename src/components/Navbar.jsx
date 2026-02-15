import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const linkStyle =
    "relative px-1 py-1 hover:text-white transition-colors duration-300";

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          NEURON
        </NavLink>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-300">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Future", path: "/future" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink key={link.path} to={link.path} className={linkStyle}>
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 right-0 -bottom-1 h-[2px]
                                 bg-gradient-to-r from-cyan-400 to-purple-500
                                 rounded-full shadow-lg shadow-cyan-500/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}
