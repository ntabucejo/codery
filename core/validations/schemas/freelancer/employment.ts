import { z } from "zod";

const employment = z.object({
  company: z
    .string()
    .min(1, "Company Name should have at lease 1 valid character.")
    .max(50, "Company Name should not exceed more than 50 valid characters."),
  position: z
    .string()
    .min(1, "Position should have at lease 1 valid character.")
    .max(50, "Position should not exceed more than 50 valid characters."),
  description: z
    .string()
    .min(10, "Description should have at lease 10 valid characters.")
    .max(
      1000,
      "Description should not exceed more than 1000 valid characters."
    ),
  location: z
    .string()
    .min(1, "Country should have at lease 1 valid characters")
    .max(15, "Country should not exceed more than 15 valid characters."),
  from: z.object({
    id: z.string().cuid("This field cannot be blank."),
    name: z.string(),
  }),
  to: z.object({
    id: z.string().cuid("This field cannot be blank."),
    name: z.string(),
  }),
  isActive: z.boolean(),
});

export default employment;
