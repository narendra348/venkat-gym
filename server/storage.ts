import { db } from "@db";
import { 
  testimonials as testimonialsTable, 
  insertTestimonialSchema,
  type InsertTestimonial,
  type Testimonial,
  type Program,
  programs as programsTable,
  type Trainer,
  trainers as trainersTable, 
  classes as classesTable
} from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Testimonials
  getTestimonials: async (): Promise<Testimonial[]> => {
    return await db.query.testimonials.findMany({
      orderBy: (testimonial, { desc }) => [desc(testimonial.createdAt)]
    });
  },

  insertTestimonial: async (testimonial: InsertTestimonial): Promise<Testimonial> => {
    const validatedData = insertTestimonialSchema.parse(testimonial);
    const [newTestimonial] = await db.insert(testimonialsTable)
      .values(validatedData)
      .returning();
    return newTestimonial;
  },

  // Programs
  getPrograms: async (): Promise<Program[]> => {
    return await db.query.programs.findMany();
  },

  // Trainers
  getTrainers: async (): Promise<Trainer[]> => {
    return await db.query.trainers.findMany();
  },

  // Classes
  getClassesByDay: async (day: string) => {
    return await db.query.classes.findMany({
      where: eq(classesTable.day, day),
      with: {
        trainer: true,
        program: true
      }
    });
  },

  // Contact
  saveContactMessage: async (message: any) => {
    // In a real app, save to database or send via email
    console.log("Contact message received:", message);
    // Return success
    return { success: true, message: "Message received" };
  }
};
