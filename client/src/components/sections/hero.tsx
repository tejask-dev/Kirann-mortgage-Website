import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import kirannSharmaImg from "@/assets/kirann-sharma.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="text-white fade-in"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-7 leading-tight drop-shadow-lg">
            Turning Dreams Into <span className="text-yellow-300">Homes</span>
          </h1>
          <p className="text-xl mb-4 text-blue-100 leading-relaxed max-w-2xl drop-shadow">
            Your trusted Level One Mortgage Agent in Windsor, Ontario. With LendCity Mortgages, I've helped countless families secure their dream homes with competitive rates and personalized service.
          </p>
          {/* International Service Banner - improved color and visibility */}
          <div className="mb-6">
            <div className="flex items-center justify-start gap-2 bg-white/90 backdrop-blur border border-blue-200 rounded-xl px-5 py-2 shadow font-semibold text-blue-900 text-lg w-fit">
              <span role="img" aria-label="Globe" className="text-blue-700">🌎</span>
              <span>
                Serving clients in{" "}
                <span className="font-bold text-[hsl(var(--primary-blue))] underline underline-offset-4 decoration-[hsl(var(--primary-blue))]">Canada</span>
                {", "}
                <span className="font-bold text-[hsl(var(--primary-blue))] underline underline-offset-4 decoration-[hsl(var(--primary-blue))]">USA</span>
                {", and "}
                <span className="font-bold text-[hsl(var(--primary-blue))] underline underline-offset-4 decoration-[hsl(var(--primary-blue))]">Mexico</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--success-green))] to-green-500 text-white hover:from-green-500 hover:to-[hsl(var(--success-green))] transition-all duration-300 text-lg font-semibold shadow-lg rounded-full"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-blue))] text-white hover:from-[hsl(var(--secondary-blue))] hover:to-[hsl(var(--primary-blue))] transition-all duration-300 text-lg font-semibold rounded-full shadow"
                asChild
              >
                <a href="tel:5199652140">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="flex items-center space-x-10 mt-14 text-blue-100"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-4xl font-extrabold text-yellow-300 drop-shadow">20+</div>
              <div className="text-base">Closings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-yellow-300 drop-shadow">5★</div>
              <div className="text-base">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-yellow-300 drop-shadow">2+</div>
              <div className="text-base">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="lg:text-right fade-in flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -left-8 bg-yellow-300/40 w-32 h-32 rounded-full blur-2xl z-0" />
            <img 
              src={kirannSharmaImg}
              alt="Kirann Sharma - Professional Mortgage Agent" 
              className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl shadow-2xl border-4 border-white relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-400/20 w-24 h-24 rounded-full blur-xl z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}