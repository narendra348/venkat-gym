import { db } from "./index";
import * as schema from "@shared/schema";
import { programs, trainers, testimonials, schedule } from "../client/src/lib/data";

async function seed() {
  try {
    console.log("Starting database seed...");
    
    // Seed programs
    console.log("Seeding programs...");
    for (const program of programs) {
      // Check if program already exists
      const existingProgram = await db.query.programs.findFirst({
        where: (programs, { eq }) => eq(programs.name, program.name)
      });
      
      if (!existingProgram) {
        await db.insert(schema.programs).values({
          name: program.name,
          description: program.description,
          duration: program.duration,
          image: program.image
        });
        console.log(`Created program: ${program.name}`);
      } else {
        console.log(`Program already exists: ${program.name}`);
      }
    }
    
    // Seed trainers
    console.log("Seeding trainers...");
    for (const trainer of trainers) {
      // Check if trainer already exists
      const existingTrainer = await db.query.trainers.findFirst({
        where: (trainers, { eq }) => eq(trainers.name, trainer.name)
      });
      
      if (!existingTrainer) {
        await db.insert(schema.trainers).values({
          name: trainer.name,
          specialty: trainer.specialty,
          bio: trainer.bio,
          quote: trainer.quote,
          image: trainer.image
        });
        console.log(`Created trainer: ${trainer.name}`);
      } else {
        console.log(`Trainer already exists: ${trainer.name}`);
      }
    }
    
    // Seed testimonials
    console.log("Seeding testimonials...");
    for (const testimonial of testimonials) {
      // Check if testimonial already exists
      const existingTestimonial = await db.query.testimonials.findFirst({
        where: (testimonials, { eq, and }) => and(
          eq(testimonials.name, testimonial.name),
          eq(testimonials.text, testimonial.text)
        )
      });
      
      if (!existingTestimonial) {
        await db.insert(schema.testimonials).values({
          name: testimonial.name,
          email: `${testimonial.name.toLowerCase().replace(' ', '.')}@example.com`,
          status: testimonial.status,
          rating: testimonial.rating,
          text: testimonial.text,
          image: testimonial.image,
          approved: true,
          createdAt: new Date()
        });
        console.log(`Created testimonial from: ${testimonial.name}`);
      } else {
        console.log(`Testimonial already exists from: ${testimonial.name}`);
      }
    }
    
    // Seed classes (schedule)
    console.log("Seeding class schedule...");
    
    // First, get all programs and trainers from database to get their IDs
    const dbPrograms = await db.query.programs.findMany();
    const dbTrainers = await db.query.trainers.findMany();
    
    // Create a map for quick lookup
    const programMap = new Map(dbPrograms.map(p => [p.name, p.id]));
    const trainerMap = new Map(dbTrainers.map(t => [t.name, t.id]));
    
    // Loop through schedule data
    for (const [day, classes] of Object.entries(schedule)) {
      for (const classInfo of classes) {
        // Get program ID by name
        const programId = programMap.get(classInfo.name);
        if (!programId) {
          console.log(`Program not found for class: ${classInfo.name}`);
          continue;
        }
        
        // Get trainer ID by name
        const trainerId = trainerMap.get(classInfo.trainer);
        if (!trainerId) {
          console.log(`Trainer not found for class: ${classInfo.trainer}`);
          continue;
        }
        
        // Check if class already exists
        const existingClass = await db.query.classes.findFirst({
          where: (classes, { eq, and }) => and(
            eq(classes.programId, programId),
            eq(classes.trainerId, trainerId),
            eq(classes.day, day),
            eq(classes.time, classInfo.time)
          )
        });
        
        if (!existingClass) {
          await db.insert(schema.classes).values({
            programId,
            trainerId,
            day,
            time: classInfo.time,
            location: classInfo.location
          });
          console.log(`Created class: ${classInfo.name} on ${day} at ${classInfo.time}`);
        } else {
          console.log(`Class already exists: ${classInfo.name} on ${day} at ${classInfo.time}`);
        }
      }
    }
    
    console.log("Database seed completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
