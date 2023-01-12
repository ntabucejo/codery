import Avatar from "@core/components/elements/avatar";
import Symbol from "@core/components/elements/symbol";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  name: string;
  description: string;
  location: string;
};
const Review = ({ name, description, location }: Props) => {
  return (
    <div className="flex flex-col gap-4 py-1 px-2">
      <div className="grid grid-cols-[1fr,auto] items-start">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
            alt="avatar"
          />
          <div>
            <h4 className="font-semibold text-sm">{name}</h4>
            <h5 className="text-xs text-primary-dark/fade">{location}</h5>
          </div>
        </div>
        <div className="gap-0.1 ml-auto flex items-center">
          {[1, 2, 3, 4, 5].map((rating, index) => (
            <Symbol
              key={rating}
              size="small"
              Icon={StarIcon}
              isHoverDisabled
              className="text-yellow-400"
            />
          ))}
          <p className="ml-1 text-xs font-medium">{"(158)"}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="w-full border-[1px] border-primary-dark/5" />
    </div>
  );
};

export default Review;
