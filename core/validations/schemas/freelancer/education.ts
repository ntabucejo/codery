import { z } from "zod";

const education = z.object({
  school: z.string().min(1).max(50),
  degree: z.object({ id: z.string().cuid(), name: z.string() }),
  area: z.object({ id: z.string().cuid(), name: z.string() }),
  from: z.object({ id: z.string().cuid(), name: z.string() }),
  to: z.object({ id: z.string().cuid(), name: z.string() }),
});

export default education;
