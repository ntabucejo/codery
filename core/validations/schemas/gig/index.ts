import { z } from "zod";
import thumbnail from "./thumbnail";

const gig = z.object({
  title: z
    .string()
    .startsWith("I will", "Project title must start with 'I will'")
    .max(80),
  description: z.string().min(10).max(1000),
  category: z.object({ id: z.string().cuid(), name: z.string() }),
  tags: z
    .object({ id: z.string().cuid(), name: z.string() })
    .array()
    .min(1)
    .max(12),
  thumbnails: thumbnail.array().min(1).max(8),
  from: z.number().positive(),
  to: z.number().positive(),
  period: z.number().positive(),
  isPublished: z.boolean(),
});

export default gig;
