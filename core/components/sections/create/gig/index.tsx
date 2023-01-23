"use client";

import Button from "@core/components/elements/button";
import Stages from "@core/components/elements/stages";
import {
  type GigFields,
  gigSchema,
  GigErrors,
  gigFields,
  gigErrors,
} from "@core/validations/gig";
import { MouseEvent, useState } from "react";
import General from "./general";
import Publish from "./publish";
import Showcase from "./showcase";

const Gig = () => {
  const [fields, setFields] = useState<GigFields>(gigFields);
  const [errors, setErrors] = useState<GigErrors>(gigErrors);

  console.log(fields);

  const panels = [
    {
      id: 1,
      title: "General",
      content: (
        <General fields={fields} setFields={setFields} errors={errors} />
      ),
    },
    {
      id: 2,
      title: "Showcase",
      content: (
        <Showcase fields={fields} setFields={setFields} errors={errors} />
      ),
    },
    {
      id: 3,
      title: "Publish",
      content: <Publish />,
    },
  ];

  const handleSumbit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clearErrors = () => setErrors(gigErrors);
    const result = gigSchema.safeParse(fields);
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
      <Stages name="CREATE / GIG" panels={panels} />
      <Button variant="primary" onClick={handleSumbit}>
        Submit
      </Button>
    </section>
  );
};

export default Gig;
