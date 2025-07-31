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

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[hsl(var(--dark-grey))] mb-6">Mortgage Services</h2>
          <p className="text-xl text-[hsl(var(--text-grey))] max-w-3xl mx-auto">
            Comprehensive mortgage solutions tailored to your unique financial situation and homeownership goals.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gradient-to-br from-[hsl(var(--light-blue))] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-[hsl(var(--primary-blue))] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--dark-grey))] mb-4">{service.title}</h3>
              <p className="text-[hsl(var(--text-grey))] mb-6">{service.description}</p>
              <ul className="text-sm text-[hsl(var(--text-grey))] space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-[hsl(var(--success-green))] mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
