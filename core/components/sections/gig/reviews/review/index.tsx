import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Symbol from "@core/components/elements/symbol";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

type Props = {
  name: string;
  comment: string;
  location: string;
};

const Review = ({ name, comment, location }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
            alt="avatar"
            size="medium"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <Pin Icon={MapPinIcon}>{location}</Pin>
            <p className="mt-2">{comment}</p>
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
    </div>
  );
};

export default Review;
