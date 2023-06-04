import { z } from "zod";

const payment = z.object({
  description: z
    .string()
    .min(10, "Description must have at least 10 characters.")
    .max(1000, "Description must not exceed to 1000 characters."),
  amount: z
    .number()
    .positive("Amount should be positive only.")
    .min(5, "Amount should starts with 5 dollars.")
    .max(10000, "Amount should not exceed more than 10000 dollars."),
  month: z
    .number()
    .positive("Month should be positive only.")
    .max(12, "Month should not exceed more than with 12"),
  year: z
    .number()
    .positive("Delivery should be positive only.")
    .max(2040, "Years should not exceed more than year 2040"),
  cvc: z
    .number()
    .positive("Delivery should be positive only.")
    .min(3, "CVC should starts with 3.")
    .max(3, "CVC should not exceed more than with 3."),
});

export default payment;
