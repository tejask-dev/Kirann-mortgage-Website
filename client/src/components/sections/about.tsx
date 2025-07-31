import { Tag, Building, Handshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: Tag,
      title: "Licensed Professional",
      description: "Level One Mortgage Agent Certification",
    },
    {
      icon: Building,
      title: "LendCity Partner",
      description: "Trusted mortgage brokerage network",
    },
    {
      icon: Handshake,
      title: "Client-Focused",
      description: "Personalized service for every client",
    },
    {
      icon: MapPin,
      title: "Windsor Based",
      description: "Local market expertise",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[#f4f8fb] via-[#e9f1fa] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="fade-in flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                className="absolute -top-8 -left-8 bg-[hsl(var(--primary-blue))]/10 w-32 h-32 rounded-full blur-2xl z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional mortgage consultation"
                className="w-full rounded-3xl shadow-2xl border-4 border-white relative z-10"
              />
              <motion.div
                className="absolute -bottom-8 -right-8 bg-[hsl(var(--primary-blue))]/10 w-24 h-24 rounded-full blur-xl z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--primary-blue))] mb-6">
              About Kirann Sharma
            </h2>
            <div className="mb-8">
              <p className="text-lg md:text-xl text-[hsl(var(--dark-grey))] mb-4 leading-relaxed font-medium">
                Driven. Experienced. Committed.
              </p>
              <p className="text-lg text-[hsl(var(--text-grey))] mb-3 leading-relaxed">
                I’m Kirann Sharma, a Level One Mortgage Agent licensed with LendCity Mortgages. I combine passion, expertise, and personalized guidance to help Windsor families and individuals achieve their homeownership dreams.
              </p>
              <p className="text-lg text-[hsl(var(--text-grey))] leading-relaxed">
                My mission is simple: listen to your needs, understand your goals, and work tirelessly to secure the best mortgage solution for you. Whether you're buying your first home, refinancing, or investing, I’m here with honest advice and a friendly approach—every step of the way.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.11 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -7, scale: 1.04 }}
                >
                  <div className="bg-[hsl(var(--primary-blue))]/10 rounded-full p-3 mb-3 flex items-center justify-center">
                    <feature.icon className="text-[hsl(var(--primary-blue))] text-3xl" />
                  </div>
                  <h3 className="font-semibold text-lg text-[hsl(var(--dark-grey))] mb-1 group-hover:text-[hsl(var(--primary-blue))] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[hsl(var(--text-grey))] text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}