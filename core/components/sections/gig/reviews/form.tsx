"use client";

import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import validate from "@core/utilities/validate";
import schemas from "@core/validations/schemas";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodIssue } from "zod";
import {
  Category,
  Freelancer,
  Gig,
  Review as ReviewType,
  Skill,
  Tag,
  Technology,
  Thumbnail,
  User,
} from "@prisma/client";

type Props = {
  user: (User & {
    freelancer: Freelancer | null;
}) | null
  gig:
    | (Gig & {
        freelancer: Freelancer & {
          user: User;
          skills: (Skill & {
            technology: Technology | null;
          })[];
        };
        category: Category;
        thumbnails: Thumbnail[];
        reviews: (ReviewType & {
          User: User;
        })[];
        tags: Tag[];
      })
    | null;
};

const Form = ({user, gig }: Props) => {
  const router = useRouter();
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);
  const [fields, setFields] = useState({
    message: "",
    rating: 0,
  });

  const handleCreateReview = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const result = schemas.review.safeParse(fields);
    if (result.success) {
      try {
        await fetch(`/api/gigs/${gig?.id}/create-review`, {
          method: "POST",
          body: JSON.stringify({
            message: fields.message,
            rating: fields.rating,
            gigId: gig?.id,
            userId: user?.id,
          }),
        });
        setFields({ message: "", rating: 0 });
        setWarnings([]);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      setWarnings(result.error.issues);
    }
  };
  return (
    <form className="space-y-4">
      <Field.Body
        id="message"
        label="Message"
        warning={validate(warnings, "message")}
        description="What is your review?">
        <Field.Textarea
          id="message"
          isFull
          placeholder="Your Review here"
          value={fields.message}
          onChange={(event) =>
            setFields({ ...fields, message: event.target.value })
          }
        />
      </Field.Body>

      <Field.Body
        id="rating"
        label="Rating"
        warning={validate(warnings, "rating")}
        description="How many will you rate this freelancer?">
        <Field.Number
          id="rating"
          isFull
          value={fields.rating}
          onChange={(event) =>
            setFields({ ...fields, rating: +event.target.value })
          }
        />
      </Field.Body>
      <Button onClick={handleCreateReview}>Post Review</Button>
    </form>
  );
};

export default Form;
