import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Here you would typically:
      // 1. Send email notification using a service like Nodemailer
      // 2. Store the contact request in a database
      // 3. Send auto-reply to the client
      
      console.log("Contact form submission:", validatedData);
      
      // For now, we'll just return success
      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you within 24 hours." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs and try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
