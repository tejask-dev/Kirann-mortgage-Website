import { Home, Linkedin, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "First-Time Buyers", action: () => scrollToSection('services') },
        { label: "Refinancing", action: () => scrollToSection('services') },
        { label: "Investment Properties", action: () => scrollToSection('services') },
        { label: "Credit Solutions", action: () => scrollToSection('services') }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Me", action: () => scrollToSection('about') },
        { label: "Testimonials", action: () => scrollToSection('testimonials') },
        { label: "Contact", action: () => scrollToSection('contact') },
        { label: "Privacy Policy", action: () => {} }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "mailto:sarah.thompson@lendcity.ca", label: "Email" }
  ];

  return (
    <footer className="bg-[hsl(var(--dark-grey))] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Home className="text-[hsl(var(--primary-blue))] text-2xl" />
              <span className="text-xl font-semibold">Sarah Thompson</span>
            </div>
            <p className="text-gray-300 mb-4">
              Level One Mortgage Agent helping Windsor families achieve their homeownership dreams.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📞</span>(519) 555-0123
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>sarah.thompson@lendcity.ca
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>Windsor, Ontario
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Sarah Thompson - Level One Mortgage Agent. All rights reserved. Licensed with LendCity Mortgages.</p>
        </motion.div>
      </div>
    </footer>
  );
}
