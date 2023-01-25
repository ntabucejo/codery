import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Symbol from "@core/components/elements/symbol";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import {
  Category,
  Freelancer,
  Gig as GigType,
  Thumbnail,
  User,
} from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: GigType & {
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  };
};

const Gig = ({ data: gig }: Props) => {
  return (
    <li className="smooth overflow-hidden rounded border hover:cursor-pointer hover:shadow">
      <Link href={`/${gig.freelancer.user.username}/${gig.id}`}>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={gig.thumbnails[0].image}
            alt="Gig Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Details */}
        <div className="space-y-4 p-2">
          <div className="flex items-center gap-4">
            <Avatar
              src={gig.freelancer.user.image!}
              alt="Avatar"
              size="small"
            />
            <div>
              <h4 className="font-bold">{gig.freelancer.user.name}</h4>
              <Pin size="small" Icon={MapPinIcon}>
                {gig.freelancer.user.location || "World of Codery"}
              </Pin>
            </div>
          </div>
          <h3 className="text-sm">{gig.title}</h3>
          <div className="space-y-2">
            <h5 className="text-xs font-semibold text-primary-dark/fade">
              {gig.category.name}
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
                <p className="text-sm font-bold text-primary-dark">{`$${gig.from} - $${gig.to}`}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Gig;
