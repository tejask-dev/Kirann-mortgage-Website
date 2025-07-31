import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="text-white fade-in"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Turning Dreams Into <span className="text-yellow-300">Homes</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Your trusted Level One Mortgage Agent in Windsor, Ontario. With LendCity Mortgages, I've helped countless families secure their dream homes with competitive rates and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-[hsl(var(--success-green))] text-white hover:bg-green-600 transition-all duration-300 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--primary-blue))] transition-all duration-300 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="flex items-center space-x-8 mt-12 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-sm">Deals Closed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5★</div>
              <div className="text-sm">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="lg:text-right fade-in"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
            alt="Sarah Thompson - Professional Mortgage Agent" 
            className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
