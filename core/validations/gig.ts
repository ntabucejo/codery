import { z } from "zod";

export const gigSchema = z.object({
  title: z.string().startsWith("I will").max(80),
  description: z.string().min(10).max(1000),
  category: z.object({ id: z.string().cuid(), name: z.string() }),
  tags: z
    .object({ id: z.string().cuid(), name: z.string() })
    .array()
    .min(1)
    .max(12),
  showcases: z.object({ image: z.string().url() }).array().min(1).max(8),
  price: z.object({
    minimum: z.number().positive(),
    maximum: z.number().positive(),
  }),
  period: z.object({ id: z.string().cuid(), name: z.string() }),
});

export type GigFields = z.infer<typeof gigSchema>;

export const gigFields: GigFields = {
  title: "",
  description: "",
  category: {
    id: "",
    name: "",
  },
  tags: [],
  showcases: [],
  price: {
    minimum: 5,
    maximum: 100,
  },
  period: {
    id: "",
    name: "",
  },
};

export const gigErrors = {
  title: "",
  description: "",
  category: "",
  tags: "",
  showcases: "",
  price: "",
  period: "",
};

export type GigErrors = typeof gigErrors;
