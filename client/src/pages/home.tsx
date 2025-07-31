import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/ui/floating-cta";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f8fb] via-[#e9f1fa] to-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}