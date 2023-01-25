import { z } from "zod";

const testimonial = z.object({
  name: z
    .string()
    .min(1, "Name should have at lease 1 valid character.")
    .max(15, "Name should not exceed more than 15 valid characters."),
  email: z.string().email(),
  position: z
    .string()
    .min(1, "Position should have at lease 1 valid character.")
    .max(50, "Position should not exceed more than 50 valid characters."),
  message: z
    .string()
    .min(10, "Message should have at lease 1 valid character.")
    .max(1000, "Message should not exceed more than 1000 valid characters."),
});

export default testimonial;
