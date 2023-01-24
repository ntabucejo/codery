"use client";

import Stages from "@core/components/elements/stages";
import { useState, type MouseEvent } from "react";
import Experience from "./experience";
import Personal from "./personal";
import Overview from "./overview";
import Button from "@core/components/elements/button";
import Achievement from "./achivement";
import schemas from "@core/validations/schemas";
import stores from "@core/stores";
import { ZodIssue } from "zod";

const Freelancer = () => {
  const fields = stores.freelancer.base((state) => state.fields);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const panels = [
    {
      id: 1,
      title: "Personal",
      content: <Personal warnings={warnings} />,
    },
    {
      id: 2,
      title: "Experience",
      content: <Experience warnings={warnings} />,
    },
    {
      id: 3,
      title: "Achievement",
      content: <Achievement warnings={warnings} />,
    },
    {
      id: 4,
      title: "Overview",
      content: <Overview />,
    },
  ];

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.freelancer.base.safeParse(fields);
    if (result.success) {
      return;
    }
    setWarnings(result.error.issues);
  };

  return (
    <section className="contain space-y-4">
      <Stages name="CREATE / FREELANCER" panels={panels} />
      <Button onClick={handleSubmit}>Submit</Button>
    </section>
  );
};

export default Freelancer;
