import { Star, Quote, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Eyram Dodjro",
    role: "Refinance Client",
    content:
      "Kirann did a wonderful job with my refinance. She really took the time to understand all of my needs. She was patient, answered all of my calls throughout the whole process and never left me hanging. I really appreciate all her efforts. Wonderful job to the whole LendCity team as well but huge shoutout to Kirann for a job well done. Anyone looking for a mortgage rep, feel free to contact her.",
    location: "Refinance",
  },
  {
    name: "Kristen McDonald",
    role: "New Home Buyer",
    content:
      "Scott and Kirann were absolutely amazing to work with during our recent home purchase. We had an extremely tight timeline to make everything come together and I can honestly say that without Kirann we probably would not have pulled it off. She worked endlessly to make sure everything was in place. Thank you so much for the amazing customer service you offer, it's a rare occurrence these days! This team is the best! You will not regret working with them.",
    location: "New Home",
  },
  {
    name: "Trish Jackson",
    role: "Refinance Client",
    content:
      "Awesome team Erin and Kirann! Very knowledgeable, professional yet comfortable to work with. My search for a new mortgage was the smoothest, most stress-free experience. Thank you, thank you, thank you!!",
    location: "Refinance",
  },
  {
    name: "Sokol Reka",
    role: "Mortgage Client",
    content:
      "Great experience with Kirann. She is punctual, very knowledgeable and helpful. She worked hard with our case to our satisfaction. Would recommend her to anyone.",
    location: "Mortgage",
  },
];

const stats = [
  { value: "100%", label: "5-Star Ratings" },
  { value: "24hrs", label: "Response Time" },
  { value: "20+", label: "Closings" },
  { value: "$5M+", label: "Funded" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, autoRotate]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoRotate(false);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoRotate(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-[#f4f8fb] via-[#e9f1fa] to-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          className="text-center mb-12 fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-[hsl(var(--primary-blue))] mb-6">
            What My Clients Say
          </h2>
          <p className="text-xl text-[hsl(var(--dark-grey))] max-w-3xl mx-auto">
            Real stories from real families who trusted me with their mortgage needs.
          </p>
        </motion.div>

        <div className="relative w-full flex items-center justify-center">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[hsl(var(--primary-blue))]/10 rounded-full p-3 hover:bg-[hsl(var(--primary-blue))]/30 transition shadow"
            onClick={prevTestimonial}
            aria-label="Previous"
          >
            <ArrowLeft className="text-[hsl(var(--primary-blue))] w-7 h-7" />
          </button>
          <div className="w-full md:w-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-gradient-to-br from-[hsl(var(--primary-blue))]/10 to-white p-8 rounded-3xl shadow-xl border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[hsl(var(--primary-blue))] via-[hsl(var(--secondary-blue))] to-[#2e4a6d] rounded-t-3xl" />
                <div className="flex justify-center mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-px" />
                  ))}
                </div>
                <div className="mb-4 text-center">
                  <h4 className="font-bold text-[hsl(var(--primary-blue))] text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[hsl(var(--dark-grey))] text-base">
                    {testimonials[current].role}
                  </p>
                </div>
                <p className="text-[hsl(var(--text-grey))] italic mb-5 text-center leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <div className="text-base text-[hsl(var(--primary-blue))] flex items-center justify-center font-medium">
                  <Quote className="mr-2 h-5 w-5" />
                  {testimonials[current].location}
                </div>
                <div className="flex justify-center mt-8 gap-3">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrent(idx);
                        setAutoRotate(false);
                      }}
                      className={`w-3 h-3 rounded-full transition border-2 border-[hsl(var(--primary-blue))] ${
                        current === idx
                          ? "bg-[hsl(var(--primary-blue))]"
                          : "bg-white"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[hsl(var(--primary-blue))]/10 rounded-full p-3 hover:bg-[hsl(var(--primary-blue))]/30 transition shadow"
            onClick={nextTestimonial}
            aria-label="Next"
          >
            <ArrowRight className="text-[hsl(var(--primary-blue))] w-7 h-7" />
          </button>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white rounded-3xl p-10 shadow-xl fade-in border border-gray-100 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.13 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 flex justify-center items-center">
                  <span className="text-4xl font-extrabold text-[hsl(var(--primary-blue))]">
                    {stat.value}
                  </span>
                </div>
                <div className="text-[hsl(var(--dark-grey))] font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}