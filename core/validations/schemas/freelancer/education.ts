import { z } from "zod";

const education = z.object({
  school: z
    .string()
    .min(1, "University Name have at lease 1 character.")
    .max(50, "University Name hould not exceed more than 10 characters.."),
  degree: z.object({
    id: z.string().cuid("This field cannot be blank."),
    name: z.string(),
  }),
  area: z.object({
    id: z.string().cuid("This field cannot be blank."),
    name: z.string(),
  }),
  from: z.object({
    id: z.string().cuid("This field cannot be blank."),
    name: z.string(),
  }),
  to: z.object({
    id: z.string().cuid("This field cannot be blank."),
    name: z.string(),
  }),
});

export default education;
