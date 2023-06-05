import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Symbol from "@core/components/elements/symbol";
import useUser from "@core/hooks/use-user";
import validate from "@core/utilities/validate";
import schemas from "@core/validations/schemas";
import { StarIcon } from "@heroicons/react/24/solid";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodIssue } from "zod";
import Form from "./form";
import Review from "./review";

type Props = {
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

const Reviews = async ({ gig }: Props) => {
  const user = await useUser();
  const totalRating =
    gig?.reviews &&
    gig?.reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating =
    gig?.reviews && Math.round(totalRating! / gig.reviews.length);

  return (
    <section className="contain space-y-8">
      {gig?.freelancer.userId !== user?.id ? (
        <Form gig={gig} user={user} />
      ) : null}

      {gig?.reviews.length ? (
        <section className="w-full space-y-4">
          <div className="flex items-center gap-3 ">
            <div className="gap-0.1 flex items-center">
              {[...Array(averageRating)].map((_, index) => (
                <Symbol
                  key={index}
                  size="small"
                  Icon={StarIcon}
                  isHoverDisabled
                  className="text-yellow-400"
                />
              ))}
            </div>
            <h1 className="text-xl font-bold">
              Reviews ({gig?.reviews.length})
            </h1>
          </div>
          <div className=" flex flex-col gap-2">
            {gig?.reviews.map((review) => (
              <Review
                key={review.id}
                name={review.User.name!}
                location={review.User.location!}
                image={review.User.image!}
                message={review.message}
                rating={review.rating}
              />
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
};

export default Reviews;
