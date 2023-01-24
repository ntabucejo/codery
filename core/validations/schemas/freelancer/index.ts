import { z } from "zod";
import education from "./education";
import employment from "./employment";
import testimonial from "./testimonial";

const freelancer = z.object({
  biography: z.string().min(1).max(500),
  location: z.string().min(1).max(50),
  phone: z.string().min(9).max(11),
  skills: z
    .object({ id: z.string().cuid(), name: z.string() })
    .array()
    .min(1)
    .max(15),
  testimonials: testimonial.array().max(8),
  employments: employment.array().max(8),
  educations: education.array().max(8),
});

export default freelancer;
