"use client";

import Button from "@core/components/elements/button";
import Stages from "@core/components/elements/stages";
import stores from "@core/stores";
import schemas from "@core/validations/schemas";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import { ZodIssue } from "zod";
import General from "./general";
import Publish from "./publish";
import Showcase from "./showcase";

type Props = {
  user: User;
};

const Gig = ({ user }: Props) => {
  const fields = stores.gig.base((state) => state.fields);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const router = useRouter();

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
      title: "Publish",
      content: <Publish />,
    },
  ];

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.gig.base.safeParse(fields);
    if (result.success) {
      try {
        const response = await axios.post(
          `/api/data/users/${user.email}/gigs`,
          {
            ...fields,
            categoryId: fields.category.id,
            tags: fields.tags.map((tag) => {
              return { technologyId: tag.id };
            }),
          }
        );
        if (response.status === 201) {
          router.push(`${user.username}/dashboard`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setWarnings(result.error.issues);
    }
  };

  return (
    <section className="contain space-y-4">
      <Stages name="CREATE / GIG" panels={panels} />
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </section>
  );
};

export default Gig;
