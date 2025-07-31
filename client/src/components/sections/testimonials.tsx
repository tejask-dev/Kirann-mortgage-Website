import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "First-Time Home Buyer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Sarah made our first home purchase stress-free. She explained everything clearly and got us a fantastic rate. We couldn't have asked for better service!",
      location: "Purchased in Riverside, Windsor"
    },
    {
      name: "Jennifer Martinez",
      role: "Refinancing Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Sarah helped us refinance and save over $300 per month! Her expertise and dedication to finding the best solution was exceptional. Highly recommend!",
      location: "Refinanced family home"
    },
    {
      name: "David & Lisa Thompson",
      role: "Investment Property",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Working with Sarah for our investment property was seamless. She understood our goals and secured competitive financing quickly. True professional!",
      location: "Purchased duplex investment"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "48hrs", label: "Average Response Time" },
    { value: "150+", label: "Successful Closings" },
    { value: "$45M+", label: "Total Mortgages Funded" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[hsl(var(--dark-grey))] mb-6">What My Clients Say</h2>
          <p className="text-xl text-[hsl(var(--text-grey))] max-w-3xl mx-auto">
            Real stories from real families who trusted me with their mortgage needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[hsl(var(--dark-grey))]">{testimonial.name}</h4>
                  <p className="text-[hsl(var(--text-grey))] text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-[hsl(var(--text-grey))] italic mb-4">
                "{testimonial.content}"
              </p>
              <div className="text-sm text-[hsl(var(--text-grey))] flex items-center">
                <Quote className="text-[hsl(var(--primary-blue))] mr-2 h-4 w-4" />
                {testimonial.location}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[hsl(var(--primary-blue))] mb-2">{stat.value}</div>
                <div className="text-[hsl(var(--text-grey))]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
