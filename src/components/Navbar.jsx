import logo from "../assets/IMG_20180124_130547.jpg";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react"; // Import icons
import { motion } from "framer-motion"; // For smooth animations

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 z-50 left-0 w-full bg-gray-200 dark:bg-gray-950 flex justify-center">
      <div className="lg:max-w-[25%] mt-3 w-full flex flex-col p-4 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300 relative">
        
        {/* Top Section: Logo & Menu Buttons */}
        <div className="flex justify-between items-center w-full">
          
          {/* Left Menu Icon */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2   rounded-md  "
            animate={{ rotate: isOpen ? 180 : 0 }} // Smooth rotation
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-5 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-5 text-gray-900 dark:text-white" />
            )}
          </motion.button>

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover object-top"
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full   transition"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          </button>

        </div>

        {/* Smooth Dropdown (absolute so it doesn't push content) */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-gray-200 dark:bg-gray-800 z-50 shadow-md rounded-md overflow-hidden"
        >
          {["Home", "Projects", "About", "Contacts", "Blogs"].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="block px-6 py-3 text-lg font-semibold text-gray-800 dark:text-white transition-all relative group"
              whileHover={{ scale: 1.05, x: 10 }} // Indent text on hover
            >
              {link}
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </nav>
  );
}
