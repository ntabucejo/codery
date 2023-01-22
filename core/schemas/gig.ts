import { z } from "zod";

export const gigSchema = z.object({
  title: z.string().startsWith("I will").max(80),
  description: z.string().max(1000).min(10),
  category: z.object({ id: z.string().cuid(), name: z.string() }),
  tags: z.object({ id: z.string().cuid(), name: z.string() }).array(),
  showcases: z.object({ image: z.string().url() }).array(),
  price: z.object({
    minimum: z.number().positive(),
    maximum: z.number().positive(),
  }),
  period: z.object({ id: z.string().cuid(), name: z.string() }),
});

export type GigSchema = z.infer<typeof gigSchema>;
