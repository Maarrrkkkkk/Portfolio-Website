import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: "home", label: "Home", href: "#home" },
    { key: "about", label: "About", href: "#about" },
    { key: "projects", label: "Projects", href: "#projects" },
    { key: "contact", label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    } else {
      console.warn("Section not found:", href);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-poppins"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-200 hover:text-emerald-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-slate-800 font-poppins cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
              icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
              className="border-emerald-400/50 text-emerald-400 bg-slate-800 hover:bg-emerald-400/20"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden bg-slate-800 rounded-lg mt-4 border border-slate-700 overflow-hidden"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "top" }}
            >
              <div className="py-4 space-y-2 px-2">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block text-slate-200 hover:text-emerald-400 py-3 px-4 transition-colors duration-300 hover:bg-slate-700 rounded-lg font-poppins cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
