import { z } from "zod";

const thumbnail = z.object({
  title: z
    .string()
    .min(1, "Title should have at lease 1 valid characters.")
    .max(80, "Title should not exceed more than 80 valid characters."),
  description: z
    .string()
    .min(10, "Description should have at lease 10 valid characters.")
    .max(
      1000,
      "Description should not exceed more than 1000  valid characters."
    ),
  image: z.string().url("Should contain a valid URL."),
  repository: z.string().url("Should contain a valid URL."),
  website: z.string().url("Should contain a valid URL."),
});

export default thumbnail;
