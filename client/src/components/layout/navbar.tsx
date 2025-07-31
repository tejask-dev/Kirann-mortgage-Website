import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Reviews", id: "testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6
        ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md border-b border-gray-200' : 'bg-transparent'}
      `}
      style={{
        boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.07)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={
            `p-2 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
              isScrolled
                ? 'bg-[hsl(var(--primary-blue))]/10 border border-[hsl(var(--primary-blue))]'
                : 'bg-[hsl(var(--primary-blue))]'
            }`
          }>
            <Home className={
              isScrolled
                ? "text-[hsl(var(--primary-blue))] text-2xl"
                : "text-white text-2xl"
            } />
          </span>
          <span className="text-2xl font-bold tracking-wide text-[hsl(var(--primary-blue))]">Kirann Sharma</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 
                ${isScrolled
                  ? 'text-[hsl(var(--primary-blue))] hover:bg-[hsl(var(--primary-blue))]/10'
                  : 'text-[hsl(var(--text-grey))] hover:text-[hsl(var(--primary-blue))]'
                }
              `}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.09 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className={`rounded-full px-6 py-2 text-lg font-semibold shadow transition-colors duration-300
                bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-blue))]
                hover:from-[hsl(var(--secondary-blue))] hover:to-[hsl(var(--primary-blue))]
              `}
            >
              Contact
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7 text-[hsl(var(--primary-blue))]" />
          ) : (
            <Menu className="h-7 w-7 text-[hsl(var(--primary-blue))]" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="py-6 px-6 space-y-6 flex flex-col">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg text-[hsl(var(--primary-blue))] font-semibold text-left px-2 py-2 rounded hover:bg-[hsl(var(--primary-blue))]/10 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full rounded-full bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-blue))] text-white text-lg font-bold py-2 hover:from-[hsl(var(--secondary-blue))] hover:to-[hsl(var(--primary-blue))] shadow"
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}