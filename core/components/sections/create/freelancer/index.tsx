"use client";

import Stages from "@core/components/elements/stages";
import {
  type FreelancerFields,
  freelancerFields,
  freelancerSchema,
  freelancerErrors,
  FreelancerErrors,
} from "@core/validations/freelancer";
import { type MouseEvent, useState } from "react";
import Experience from "./experience";
import Personal from "./personal";
import Overview from "./overview";
import Button from "@core/components/elements/button";
import Achievement from "./achivement";

const Freelancer = () => {
  const [fields, setFields] = useState<FreelancerFields>(freelancerFields);
  const [errors, setErrors] = useState<FreelancerErrors>(freelancerErrors);

  const panels = [
    {
      id: 1,
      title: "Personal",
      content: (
        <Personal fields={fields} setFields={setFields} errors={errors} />
      ),
    },
    {
      id: 2,
      title: "Experience",
      content: (
        <Experience fields={fields} setFields={setFields} errors={errors} />
      ),
    },
    {
      id: 3,
      title: "Achievement",
      content: (
        <Achievement fields={fields} setFields={setFields} errors={errors} />
      ),
    },
    {
      id: 4,
      title: "Overview",
      content: <Overview />,
    },
  ];

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clearErrors = () => setErrors(freelancerErrors);
    const result = freelancerSchema.safeParse(fields);
    if (result.success) {
      clearErrors();
      return;
    }
    const validations = result.error.issues;
    const updatedErrors = validations.map((validation) => {
      return { name: validation.path[0], message: validation.message };
    });
    clearErrors();
    for (const error of updatedErrors) {
      setErrors((state) => ({ ...state, [error.name]: error.message }));
    }
  };

  return (
    <section className="contain space-y-4">
      <Stages name="CREATE / FREELANCER" panels={panels} />
      <Button onClick={handleSubmit}>Submit</Button>
    </section>
  );
};

export default Freelancer;
