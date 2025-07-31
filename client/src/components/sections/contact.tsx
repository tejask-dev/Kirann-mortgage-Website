import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I will get back to you within 24 hours.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sarah.thompson@lendcity.ca"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(519) 555-0123"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "LendCity Mortgages\n123 Ouellette Ave\nWindsor, ON N9A 1B4"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9AM-7PM\nSat: 10AM-4PM\nSun: By appointment"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[hsl(var(--dark-grey))] mb-6">Let's Get Started</h2>
          <p className="text-xl text-[hsl(var(--text-grey))] max-w-3xl mx-auto">
            Ready to take the next step? Contact me today for a free consultation and let's discuss your mortgage needs.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            className="fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[hsl(var(--light-blue))] border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[hsl(var(--dark-grey))] mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-[hsl(var(--dark-grey))] mb-2">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-[hsl(var(--dark-grey))] mb-2">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-[hsl(var(--dark-grey))] mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john.doe@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-[hsl(var(--dark-grey))] mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(519) 555-0123"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))]"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[hsl(var(--dark-grey))] mb-2">
                      How can I help you?
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))]">
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
                    <Label htmlFor="message" className="text-sm font-medium text-[hsl(var(--dark-grey))] mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell me about your mortgage needs..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="focus:border-[hsl(var(--primary-blue))] focus:ring-[hsl(var(--primary-blue))]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={contactMutation.isPending}
                    className="w-full bg-[hsl(var(--primary-blue))] text-white hover:bg-[hsl(var(--secondary-blue))] transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[hsl(var(--dark-grey))] mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-[hsl(var(--primary-blue))] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--dark-grey))]">{info.title}</h4>
                          <p className="text-[hsl(var(--text-grey))] whitespace-pre-line">{info.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Map Placeholder */}
              <motion.div 
                className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="LendCity Mortgages Office Building" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-[hsl(var(--text-grey))]">
                    <MapPin className="text-[hsl(var(--primary-blue))] mr-2 h-4 w-4 inline" />
                    Click to view on Google Maps
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
