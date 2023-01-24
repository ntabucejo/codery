import { z } from "zod";

const employment = z.object({
  company: z.string().min(1).max(50),
  position: z.string().min(1).max(50),
  description: z.string().min(10).max(1000),
  location: z.string().min(1).max(50),
  from: z.object({ id: z.string().cuid(), name: z.string() }),
  to: z.object({ id: z.string().cuid(), name: z.string() }),
  isActive: z.boolean(),
});

export default employment;
