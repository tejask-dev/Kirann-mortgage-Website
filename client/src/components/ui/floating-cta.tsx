import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="floating-btn"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        onClick={scrollToContact}
        size="lg"
        className="bg-[hsl(var(--success-green))] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
}
