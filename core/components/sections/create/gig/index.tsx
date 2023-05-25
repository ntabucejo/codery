"use client";

import Stages from "@core/components/elements/stages";
import stores from "@core/stores";
import schemas from "@core/validations/schemas";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import { ZodIssue } from "zod";
import General from "./general";
import Overview from "./overview";
import Showcase from "./showcase";

type Props = {
  user: User;
};

const Gig = ({ user }: Props) => {
  const fields = stores.gig.base((state) => state.fields);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const router = useRouter();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.gig.base.safeParse(fields);
    if (result.success) {
      try {
        const response = await axios.post(`/api/data/users/${user.id}/gigs`, {
          ...fields,
          categoryId: fields.category.id,
          tags: fields.tags.map((tag) => {
            return { technologyId: tag.id };
          }),
        });
        if (response.status === 201) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setWarnings(result.error.issues);
    }
  };

  const panels = [
    {
      id: 1,
      title: "General",
      content: <General warnings={warnings} />,
    },
    {
      id: 2,
      title: "Showcase",
      content: <Showcase warnings={warnings} />,
    },
    {
      id: 3,
      title: "Overview",
      content: <Overview warnings={warnings} handleSubmit={handleSubmit} />,
    },
  ];
  return (
    <section className="contain space-y-4">
      <Stages name="CREATE GIG" panels={panels} />
    </section>
  );
};

export default Gig;
