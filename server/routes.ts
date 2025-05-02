import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiPrefix = "/api";

  // Get all testimonials
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      return res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Submit a new testimonial
  app.post(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const newTestimonial = await storage.insertTestimonial({
        name: req.body.name,
        email: req.body.email,
        rating: req.body.rating,
        text: req.body.feedback,
        status: "New Member",
        image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`,
      });
      return res.status(201).json(newTestimonial);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      return res.status(500).json({ error: "Failed to submit testimonial" });
    }
  });

  // Get all programs
  app.get(`${apiPrefix}/programs`, async (req, res) => {
    try {
      const programs = await storage.getPrograms();
      return res.json(programs);
    } catch (error) {
      console.error("Error fetching programs:", error);
      return res.status(500).json({ error: "Failed to fetch programs" });
    }
  });

  // Get all trainers
  app.get(`${apiPrefix}/trainers`, async (req, res) => {
    try {
      const trainers = await storage.getTrainers();
      return res.json(trainers);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      return res.status(500).json({ error: "Failed to fetch trainers" });
    }
  });

  // Get class schedule (all days or specific day)
  app.get(`${apiPrefix}/schedule`, async (req, res) => {
    try {
      const day = req.query.day as string | undefined;
      
      if (day) {
        const classes = await storage.getClassesByDay(day.toLowerCase());
        return res.json(classes);
      } else {
        // Return classes for all days in an object keyed by day
        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        const schedule: Record<string, any[]> = {};
        
        for (const d of days) {
          schedule[d] = await storage.getClassesByDay(d);
        }
        
        return res.json(schedule);
      }
    } catch (error) {
      console.error("Error fetching schedule:", error);
      return res.status(500).json({ error: "Failed to fetch schedule" });
    }
  });

  // Submit contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const result = await storage.saveContactMessage(req.body);
      return res.status(201).json(result);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
