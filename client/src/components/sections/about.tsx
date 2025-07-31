import { Tag, Building, Handshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: Tag,
      title: "Licensed Professional",
      description: "Level One Mortgage Agent Certification"
    },
    {
      icon: Building,
      title: "LendCity Partner",
      description: "Trusted mortgage brokerage network"
    },
    {
      icon: Handshake,
      title: "Client-Focused",
      description: "Personalized service for every client"
    },
    {
      icon: MapPin,
      title: "Windsor Based",
      description: "Local market expertise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional mortgage consultation" 
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[hsl(var(--dark-grey))] mb-6">About Sarah Thompson</h2>
            <p className="text-lg text-[hsl(var(--text-grey))] mb-6 leading-relaxed">
              As a dedicated Level One Mortgage Agent with LendCity Mortgages, I bring passion, expertise, and personalized service to every client interaction. Based in Windsor, Ontario, I've built my reputation on helping families and individuals navigate the complex world of home financing with confidence.
            </p>
            <p className="text-lg text-[hsl(var(--text-grey))] mb-8 leading-relaxed">
              My approach is simple: listen to your needs, understand your goals, and work tirelessly to secure the best mortgage solution for your unique situation. Whether you're a first-time homebuyer or looking to refinance, I'm here to guide you every step of the way.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="text-[hsl(var(--primary-blue))] text-2xl mb-3" />
                  <h3 className="font-semibold text-[hsl(var(--dark-grey))] mb-2">{feature.title}</h3>
                  <p className="text-[hsl(var(--text-grey))] text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
