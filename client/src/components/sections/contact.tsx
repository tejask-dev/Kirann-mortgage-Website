import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "kirann@lendcity.ca"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "519-965-2140"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "4769 Wyandotte St E\nWindsor, ON N8Y 1H8"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "9AM - 10PM Everyday"
    }
  ];

  // Pick icon color for each info box
  const iconColors = [
    "text-blue-600",
    "text-green-600",
    "text-red-500",
    "text-yellow-500"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#f4f8fb] via-[#e9f1fa] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--primary-blue))] mb-6">Let's Get Started</h2>
          <p className="text-xl text-[hsl(var(--dark-grey))] max-w-3xl mx-auto">
            Ready to take the next step? Contact me today for a free consultation and let's discuss your mortgage needs.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/90 border border-gray-100 shadow-2xl rounded-2xl">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-[hsl(var(--primary-blue))] mb-6">Send Me a Message</h3>
                <form
                  action="https://formspree.io/f/mzzvvkkn"
                  method="POST"
                  className="space-y-7"
                >
                  <div className="grid md:grid-cols-2 gap-7">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-[hsl(var(--dark-grey))] mb-2">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        name="firstName"
                        required
                        placeholder="John"
                        className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))] font-medium"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-[hsl(var(--dark-grey))] mb-2">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))] font-medium"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-[hsl(var(--dark-grey))] mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john.doe@email.com"
                      className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-[hsl(var(--dark-grey))] mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="519-965-2140"
                      className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))] font-medium"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-[hsl(var(--dark-grey))] mb-2">
                      How can I help you?
                    </Label>
                    <Select name="serviceType">
                      <SelectTrigger className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))] font-medium">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">First-time home buyer</SelectItem>
                        <SelectItem value="refinancing">Refinancing</SelectItem>
                        <SelectItem value="investment">Investment property</SelectItem>
                        <SelectItem value="credit">Credit solutions</SelectItem>
                        <SelectItem value="self-employed">Self-employed financing</SelectItem>
                        <SelectItem value="renewal">Renewal/Switch</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-[hsl(var(--dark-grey))] mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your mortgage needs..."
                      className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))] font-medium"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-blue))] text-white hover:from-[hsl(var(--secondary-blue))] hover:to-[hsl(var(--primary-blue))] transition-all duration-300 rounded-full shadow-lg text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information & Map */}
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              <Card className="bg-white/90 border border-gray-100 shadow-xl rounded-2xl">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-[hsl(var(--primary-blue))] mb-7">Get In Touch</h3>
                  <div className="space-y-7">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        className="flex items-start gap-5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <info.icon className={`h-8 w-8 ${iconColors[index]}`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[hsl(var(--primary-blue))]">{info.title}</h4>
                          <p className="text-[hsl(var(--text-grey))] whitespace-pre-line">{info.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Map Placeholder */}
              <motion.div
                className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="LendCity Mortgages Office Building" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white flex items-center justify-between">
                  <p className="text-sm text-[hsl(var(--text-grey))] flex items-center">
                    <MapPin className="text-[hsl(var(--primary-blue))] mr-2 h-5 w-5" />
                    <a 
                      href="https://www.google.com/maps/place/LendCity/@42.3262601,-82.9819998,17z/data=!3m1!4b1!4m6!3m5!1s0x883b2b4acd5dab93:0xdeb95e5aa034dbdd!8m2!3d42.3262562!4d-82.9794249!16s%2Fg%2F11fpr8t7s1?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-[hsl(var(--primary-blue))] transition"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Remove all useState, useMutation, and APIRequest logic. 
// The form now submits directly to Formspree and you will receive emails at your configured address.
// You can further style and customize as needed.