import { Home, RefreshCw, TrendingUp, CreditCard, Users, Calculator, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "First-Time Home Buyers",
      description: "Navigate your first home purchase with confidence. I'll help you understand the process, secure pre-approval, and find the best rates available.",
      features: ["Pre-approval assistance", "First-time buyer programs", "Down payment guidance"]
    },
    {
      icon: RefreshCw,
      title: "Refinancing",
      description: "Lower your monthly payments, access equity, or consolidate debt. Explore refinancing options that could save you thousands.",
      features: ["Rate improvements", "Debt consolidation", "Equity access"]
    },
    {
      icon: TrendingUp,
      title: "Investment Properties",
      description: "Build your real estate portfolio with specialized investment property financing. Let me help you maximize your investment potential.",
      features: ["Portfolio expansion", "Commercial properties", "Competitive investor rates"]
    },
    {
      icon: CreditCard,
      title: "Credit Solutions",
      description: "Overcome credit challenges with tailored solutions. I work with multiple lenders to find options even for complex credit situations.",
      features: ["Credit repair guidance", "Alternative lending", "Specialized programs"]
    },
    {
      icon: Users,
      title: "Self-Employed",
      description: "Specialized mortgage solutions for self-employed individuals and business owners. Navigate unique documentation requirements with ease.",
      features: ["Alternative documentation", "Business owner programs", "Flexible qualification"]
    },
    {
      icon: Calculator,
      title: "Renewal & Switches",
      description: "Don't automatically renew. Let me review your options and potentially save you money with a better rate or terms.",
      features: ["Rate comparisons", "Term negotiations", "Switch incentives"]
    }
  ];

  // Icon backgrounds for vibrancy and visibility
  const iconBg = [
    "bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-500",
    "bg-gradient-to-br from-green-600 via-teal-400 to-blue-400",
    "bg-gradient-to-br from-yellow-500 via-orange-400 to-pink-500",
    "bg-gradient-to-br from-pink-500 via-red-400 to-orange-400",
    "bg-gradient-to-br from-purple-600 via-indigo-400 to-blue-400",
    "bg-gradient-to-br from-teal-600 via-green-400 to-blue-400",
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#f4f8fb] via-[#e9f1fa] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-[hsl(var(--primary-blue))] mb-6">Mortgage Services</h2>
          <p className="text-xl text-[hsl(var(--dark-grey))] max-w-3xl mx-auto">
            Comprehensive mortgage solutions tailored to your unique financial situation and homeownership goals.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gradient-to-br from-[hsl(var(--light-blue))] to-white p-9 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 fade-in border border-gray-100 group"
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              whileHover={{ y: -16, scale: 1.04, boxShadow: "0 8px 32px rgba(60,60,120,0.14)" }}
            >
              <motion.div
                className={`${iconBg[index % iconBg.length]} w-16 h-16 rounded-xl flex items-center justify-center mb-7 shadow-lg
                  group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                initial={{ rotate: -10, scale: 0.9 }}
                whileHover={{ rotate: 0, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <service.icon className="text-white text-3xl drop-shadow-lg" />
              </motion.div>
              <h3 className="text-xl font-bold text-[hsl(var(--primary-blue))] mb-4 group-hover:text-[hsl(var(--secondary-blue))] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[hsl(var(--dark-grey))] mb-7 font-medium">{service.description}</p>
              <ul className="text-base text-[hsl(var(--text-grey))] space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: featureIndex * 0.09 }}
                    viewport={{ once: true }}
                  >
                    <Check className="text-green-500 mr-2 h-5 w-5" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}