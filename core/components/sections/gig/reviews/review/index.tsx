import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Symbol from "@core/components/elements/symbol";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

type Props = {
  name: string;
  message: string;
  rating: number;
  image: string;
  location: string;
};

const Review = ({ name, message, rating, image, location }: Props) => {
  return (
    <div className="smooth break-inside-avoid flex flex-col space-y-4 rounded border bg-white p-4 hover:shadow-lg">
      <div className="flex gap-4">
        <Avatar src={image} alt="avatar" size="medium" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <Pin Icon={MapPinIcon}>{location}</Pin>
        </div>
      </div>
      <p className="text-sm">{message}</p>
      <div className="gap-0.1 -mt-4 flex items-center">
        {[...Array(rating)].map((_, index) => (
          <Symbol
            key={index}
            size="small"
            Icon={StarIcon}
            isHoverDisabled
            className="text-yellow-400"
          />
        ))}
        <span className="font-semibold ml-2">({rating})</span>
      </div>
    </div>
  );
};

export default Review;
