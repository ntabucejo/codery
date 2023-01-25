import { z } from "zod";

const testimonial = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  position: z.string().min(1).max(50),
  message: z.string().min(10).max(1000),
});

export default testimonial;
