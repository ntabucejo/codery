import { z } from "zod";

export const thumbnailSchema = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(10).max(1000),
  image: z.string().url(),
  repository: z.string().url(),
  website: z.string().url(),
});

export const gigSchema = z.object({
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
  thumbnail: thumbnailSchema,
  thumbnails: thumbnailSchema.array().min(1).max(8),
  price: z.object({
    minimum: z.number().positive(),
    maximum: z.number().positive(),
  }),
  period: z.object({ id: z.string().cuid(), name: z.string() }),
  isPublished: z.boolean(),
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
  thumbnail: {
    title: "",
    description: "",
    image: "",
    repository: "",
    website: "",
  },
  thumbnails: [],
  price: {
    minimum: 5,
    maximum: 100,
  },
  period: {
    id: "",
    name: "",
  },
  isPublished: false,
};

export const thumbnailErrors = {
  title: "",
  description: "",
  image: "",
  repository: "",
  website: "",
};

export const gigErrors = {
  title: "",
  description: "",
  category: "",
  tags: "",
  thumbnails: "",
  price: "",
  period: "",
  isPublished: "",
};

export type GigErrors = typeof gigErrors;
export type ThumbnailErrors = typeof thumbnailErrors;
