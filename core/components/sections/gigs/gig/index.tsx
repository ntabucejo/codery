import Avatar from "@core/components/elements/avatar";
import Symbol from "@core/components/elements/symbol";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {
  thumbnail: string;
  avatar: string;
  name: string;
  location: string;
  title: string;
  category: string;
  price: string;
};

const Gig = ({
  thumbnail,
  avatar,
  name,
  location,
  title,
  category,
  price,
}: Props) => {
  return (
    <div className="smooth overflow-hidden rounded border hover:cursor-pointer hover:shadow">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image src={thumbnail} alt="Gig Image" fill className="object-cover" />
      </div>
      {/* Details */}
      <div className="space-y-4 p-2">
        <div className="flex items-center gap-4">
          <Avatar src={avatar} alt="Avatar" size="small" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <div className="flex items-center gap-1">
              <Symbol size="small" Icon={MapPinIcon} isHoverDisabled />
              <h6 className="text-xs text-primary-dark/fade">{location}</h6>
            </div>
          </div>
        </div>
        <h3 className="text-sm">{title}</h3>
        <div className="space-y-2">
          <h5 className="text-xs font-semibold text-primary-dark/fade">
            {category}
          </h5>
          <div className="flex items-center justify-between">
            <div className="gap-0.1 flex items-center">
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
            <div>
              <p className="text-sm font-bold text-primary-dark">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
