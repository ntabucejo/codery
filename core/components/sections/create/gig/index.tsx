"use client";

import Stages from "@core/components/elements/stages";
import { GigSchema } from "@core/schemas/gig";
import { useState } from "react";
import General from "./general";
import Showcase from "./showcase";

const initialState: GigSchema = {
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

const Gig = () => {
  const [fields, setFields] = useState<GigSchema>(initialState);

  const panels = [
    {
      id: 1,
      title: "General",
      content: <General fields={fields} setFields={setFields} />,
    },
    { id: 2, title: "Showcase", content: <Showcase /> },
    {
      id: 3,
      title: "Publish",
      content: <General fields={fields} setFields={setFields} />,
    },
  ];

  return (
    <section className="contain">
      <Stages name="CREATE / GIG" panels={panels} />
    </section>
  );
};

export default Gig;
