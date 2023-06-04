import { z } from "zod";

const review = z.object({
  message: z
    .string()
    .min(10, "Message must have at least 10 characters.")
    .max(1000, "Message must not exceed to 1000 characters."),
  rating: z
    .number()
    .positive("Rating should be positive only.")
    .min(1, "Rating should starts with 1 rate.")
    .max(5, "Rating should not exceed more than level 5."),
});

export default review;
