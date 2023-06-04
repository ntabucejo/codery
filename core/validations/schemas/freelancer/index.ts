import { z } from "zod";
import education from "./education";
import employment from "./employment";
import testimonial from "./testimonial";

const freelancer = z.object({
  biography: z
    .string()
    .min(1, "Biography should have at lease 1 valid character.")
    .max(1000, "Biography should not exceed more than 1000 valid characters."),
  location: z
    .string()
    .min(1, "Country should have at lease 1 valid character.")
    .max(50, "Country should not exceed more than 50 valid characters."),
  phone: z.string().min(9).max(11),
  skills: z
    .object({
      id: z.string().cuid("This field cannot be blank."),
      name: z.string(),
    })
    .array()
    .min(1, "This field cannot be blank.")
    .max(15, "Skills should not exceed more than 15 skills."),
  testimonials: testimonial
    .array()
    .max(8, "Testimonials should not exceed more than 8 testimonials."),
  employments: employment
    .array()
    .max(8, "Employments should not exceed more than 8 employments."),
  educations: education
    .array()
    .max(8, "Education should not exceed more than 8 education."),
});

export default freelancer;
