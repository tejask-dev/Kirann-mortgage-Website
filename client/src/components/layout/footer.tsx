import { Home, Instagram, Facebook, Mail } from "lucide-react";
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
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/kirann_sharmaa_mortgages/", 
      label: "Instagram", 
      color: "bg-gradient-to-br from-pink-500 via-yellow-500 to-purple-600" 
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/people/Mortgage-by-Kirann-Sharmaa/61558009440813/?_rdr", 
      label: "Facebook", 
      color: "bg-blue-600" 
    },
    { 
      icon: Mail, 
      href: "mailto:kirann@lendcity.ca", 
      label: "Email", 
      color: "bg-green-600" 
    }
  ];

  return (
    <footer className="bg-[hsl(var(--dark-grey),0.98)] md:bg-[#202c3b] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[hsl(var(--primary-blue))] p-2 rounded-full shadow-lg">
                <Home className="text-white text-2xl" />
              </div>
              <span className="text-2xl font-bold tracking-wide text-white">Kirann Sharma</span>
            </div>
            <p className="text-white/80 mb-6 italic">
              Level One Mortgage Agent helping Windsor families achieve their homeownership dreams.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} rounded-full p-2 hover:scale-110 transition duration-300 shadow-md flex items-center`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="text-white text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.12 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-lg tracking-wide text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="hover:text-[hsl(var(--primary-blue))] hover:underline transition-colors duration-200 text-left px-2 py-1 rounded text-white/80 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:bg-white/10"
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
            transition={{ duration: 0.6, delay: 0.28 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg tracking-wide text-white">Contact Info</h4>
            <div className="space-y-3">
              <p className="flex items-center text-white/80">
                <span className="mr-2 text-[hsl(var(--primary-blue))]">📞</span>
                <a href="tel:5199652140" className="hover:text-[hsl(var(--primary-blue))] transition">(519) 965-2140</a>
              </p>
              <p className="flex items-center text-white/80">
                <span className="mr-2 text-[hsl(var(--primary-blue))]">✉️</span>
                <a href="mailto:kirann@lendcity.ca" className="hover:text-[hsl(var(--primary-blue))] transition">kirann@lendcity.ca</a>
              </p>
              <p className="flex items-center text-white/80">
                <span className="mr-2 text-[hsl(var(--primary-blue))]">📍</span>
                Windsor, Ontario
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-400 mt-12 pt-8 text-center text-white/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; 2024 <span className="font-semibold text-[hsl(var(--primary-blue))]">Kirann Sharma</span> - Level One Mortgage Agent.<br />
            All rights reserved.<br />
            <span className="text-[hsl(var(--primary-blue))]">Licensed with Dominion Lending Centres Expert Financial<br/>Brokerage Licence: 12129</span><br />
            <span className="text-[hsl(var(--primary-blue))]">Made with ❤️ in Windsor, Ontario</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}