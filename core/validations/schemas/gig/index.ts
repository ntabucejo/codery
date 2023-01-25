import { z } from "zod";
import thumbnail from "./thumbnail";

const gig = z.object({
  title: z
    .string()
    .startsWith("I will", "Gig title must start with 'I will'.")
    .max(80, "Gig Title must not exceed 80 characters."),
  description: z
    .string()
    .min(10, "Description must have at least 10 characters.")
    .max(1000, "Description must not exceed to 1000 characters."),
  category: z.object({
    id: z.string().cuid("Gig should have a category."),
    name: z.string(),
  }),
  tags: z
    .object({ id: z.string().cuid("Gig should have a tag."), name: z.string() })
    .array()
    .min(1, "Each Gig should have at least 1 tag.")
    .max(12, "Gig should not have more than 12 tags."),
  thumbnails: thumbnail
    .array()
    .min(1, "Each Gig should have at least 1 thumbnail.")
    .max(10, "Each Gig should not have more than 10 thumbnails.")
    .optional(),
  from: z
    .number()
    .positive("Price should be positive only.")
    .min(5, "Price should starts with 5 dollars."),
  to: z
    .number()
    .positive("Price should be positive only.")
    .max(10000, "Price should not exceed more than 10000 dollars."),
  period: z.number().positive("Period should be positive only."),
  isPublished: z.boolean(),
});

export default gig;
