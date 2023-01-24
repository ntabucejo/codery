import { ZodIssue } from "zod";

const validate = (warnings: ZodIssue[], name: string) => {
  return warnings.find(({ path }) => path[0] === name);
};

export default validate;
