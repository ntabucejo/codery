"use client";

import Stages from "@core/components/elements/stages";
import {
  type FreelancerType,
  freelancerFields,
} from "@core/schemas/freelancer";
import { useState } from "react";
import Experience from "./experience";
import Personal from "./personal";
import Overview from "./overview";
import Achievement from "./achievment";

const Freelancer = () => {
  const [fields, setFields] = useState<FreelancerType>(freelancerFields);

  const panels = [
    {
      id: 1,
      title: "Personal",
      content: <Personal fields={fields} setFields={setFields} />,
    },
    {
      id: 2,
      title: "Experience",
      content: <Experience fields={fields} setFields={setFields} />,
    },
    {
      id: 3,
      title: "Achievement",
      content: <Achievement fields={fields} setFields={setFields} />,
    },
    {
      id: 4,
      title: "Overview",
      content: <Overview />,
    },
  ];

  return (
    <section className="contain space-y-4">
      <Stages name="CREATE / FREELANCER" panels={panels} />
    </section>
  );
};

export default Freelancer;
