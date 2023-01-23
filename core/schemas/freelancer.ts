import { z } from "zod";

export const educationSchema = z.object({
  school: z.string().min(1).max(50),
  degree: z.object({ id: z.string().cuid(), name: z.string() }),
  area: z.object({ id: z.string().cuid(), name: z.string() }),
  year: z.object({ id: z.string().cuid(), name: z.string() }),
});

export const employmentSchema = z.object({
  position: z.string().min(1).max(50),
  description: z.string().min(10).max(1000),
  location: z.string().min(1).max(50),
  year: z.object({ id: z.string().cuid(), name: z.string() }),
  isActive: z.boolean(),
});

export const testimonialSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  link: z.string().url(),
  position: z.string().min(1).max(50),
  message: z.string().min(10).max(1000),
});

export const freelancerSchema = z.object({
  biography: z.string().min(1).max(500),
  location: z.string().min(1).max(50),
  phone: z.string().min(9).max(11),
  skills: z
    .object({ id: z.string().cuid(), name: z.string() })
    .array()
    .min(5)
    .max(15),
  testimonial: testimonialSchema,
  testimonials: testimonialSchema.array().max(8),
  employment: employmentSchema,
  employments: employmentSchema.array().max(8),
  education: educationSchema,
  educations: educationSchema.array().max(8),
});

export type FreelancerType = z.infer<typeof freelancerSchema>;

export const freelancerFields: FreelancerType = {
  biography: "",
  location: "",
  phone: "",
  skills: [],
  testimonial: {
    name: "",
    email: "",
    link: "",
    position: "",
    message: "",
  },
  testimonials: [],
  employment: {
    position: "",
    description: "",
    location: "",
    year: { id: "", name: "" },
    isActive: false,
  },
  employments: [],
  education: {
    school: "",
    degree: { id: "", name: "" },
    area: { id: "", name: "" },
    year: { id: "", name: "" },
  },
  educations: [],
};
