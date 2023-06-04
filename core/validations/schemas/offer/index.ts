import { z } from "zod";

const offer = z.object({
  description: z
    .string()
    .min(10, "Description must have at least 10 characters.")
    .max(1000, "Description must not exceed to 1000 characters."),
  price: z
    .number()
    .positive("Price should be positive only.")
    .min(5, "Price should starts with 5 dollars.")
    .max(10000, "Price should not exceed more than 10000 dollars."),
  revision: z.number().positive("Revision should be positive only."),
  deliveryDays: z.number().positive("Delivery should be positive only."),
});

export default offer;
