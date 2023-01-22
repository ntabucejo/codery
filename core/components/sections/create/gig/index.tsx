"use client";

import Button from "@core/components/elements/button";
import Stages from "@core/components/elements/stages";
import { gigSchema, GigSchema } from "@core/schemas/gig";
import { MouseEvent, useState } from "react";
import General from "./general";
import Publish from "./publish";
import Showcase from "./showcase";

const initialFields: GigSchema = {
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

const initialErrors = {
  title: "",
  description: "",
  category: "",
  tags: "",
  showcases: "",
  price: "",
  period: "",
};

export type Errors = typeof initialErrors;

const Gig = () => {
  const [fields, setFields] = useState<GigSchema>(initialFields);
  const [errors, setErrors] = useState<Errors>(initialErrors);

  const panels = [
    {
      id: 1,
      title: "General",
      content: (
        <General fields={fields} setFields={setFields} errors={errors} />
      ),
    },
    { id: 2, title: "Showcase", content: <Showcase /> },
    {
      id: 3,
      title: "Publish",
      content: <Publish />,
    },
  ];

  const handleSumbit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = gigSchema.safeParse(fields);
    if (result.success) return;
    const validations = result.error.issues;
    const updatedErrors = validations.map((validation) => {
      return { name: validation.path[0], message: validation.message };
    });
    const clearErrors = () => setErrors(initialErrors);
    clearErrors();
    for (const error of updatedErrors) {
      setErrors((state) => ({ ...state, [error.name]: error.message }));
    }
  };

  return (
    <section className="contain">
      <Stages name="CREATE / GIG" panels={panels} />
      <Button variant="primary" onClick={handleSumbit}>
        Submit
      </Button>
    </section>
  );
};

export default Gig;
