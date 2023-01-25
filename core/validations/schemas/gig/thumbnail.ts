import { z } from "zod";

const thumbnail = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(10).max(1000),
  image: z.string().url(),
  repository: z.string().url(),
  website: z.string().url(),
});

export default thumbnail