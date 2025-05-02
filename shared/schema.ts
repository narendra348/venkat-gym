import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table (from original schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Programs table
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(),
  image: text("image").notNull(),
});

export const insertProgramSchema = createInsertSchema(programs);
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Program = typeof programs.$inferSelect;

// Trainers table
export const trainers = pgTable("trainers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  specialty: text("specialty").notNull(),
  bio: text("bio").notNull(),
  quote: text("quote").notNull(),
  image: text("image").notNull(),
});

export const insertTrainerSchema = createInsertSchema(trainers);
export type InsertTrainer = z.infer<typeof insertTrainerSchema>;
export type Trainer = typeof trainers.$inferSelect;

// Classes table
export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  programId: integer("program_id").references(() => programs.id).notNull(),
  trainerId: integer("trainer_id").references(() => trainers.id).notNull(),
  day: text("day").notNull(), // monday, tuesday, etc.
  time: text("time").notNull(),
  location: text("location").notNull(),
});

export const classesRelations = relations(classes, ({ one }) => ({
  program: one(programs, {
    fields: [classes.programId],
    references: [programs.id]
  }),
  trainer: one(trainers, {
    fields: [classes.trainerId],
    references: [trainers.id]
  })
}));

export const insertClassSchema = createInsertSchema(classes);
export type InsertClass = z.infer<typeof insertClassSchema>;
export type Class = typeof classes.$inferSelect;

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  status: text("status").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  image: text("image").notNull(),
  approved: boolean("approved").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials);
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
