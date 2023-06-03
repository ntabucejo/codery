"use client";

import Stages from "@core/components/elements/stages";
import { useState, type MouseEvent } from "react";
import Experience from "./experience";
import Personal from "./personal";
import Overview from "./overview";
import Achievement from "./achivement";
import schemas from "@core/validations/schemas";
import stores from "@core/stores";
import { ZodIssue } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

type Props = {
  user: User;
};

const Freelancer = ({ user }: Props) => {
  const fields = stores.freelancer.base((state) => state.fields);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const router = useRouter();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.freelancer.base.safeParse(fields);
    if (result.success) {
      try {
        const response = await axios.post(
          `/api/data/users/${user.id}/freelancers`,
          {
            ...fields,
            skills: fields.skills.map((skill) => {
              return { technologyId: skill.id };
            }),
            educations: fields.educations.map((education) => {
              return {
                ...education,
                degree: education.degree.name,
                area: education.area.name,
                from: education.degree.name,
                to: education.degree.name,
              };
            }),
            employments: fields.employments.map((employment) => {
              return {
                ...employment,
                from: employment.from.name,
                to: employment.to.name,
              };
            }),
          }
        );
        if (response.status === 201) {
          router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setWarnings(result.error.issues);
    }
  };

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
      content: <Overview warnings={warnings} handleSubmit={handleSubmit} />,
    },
  ];

  return (
    <section className="contain space-y-4">
      <Stages name="BECOME FREELANCER" panels={panels} />
    </section>
  );
};

export default Freelancer;
