import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Symbol from "@core/components/elements/symbol";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import {
  Category,
  Freelancer,
  Gig as GigType,
  Review,
  Thumbnail,
  User,
} from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: GigType & {
    category: Category;
    thumbnails: Thumbnail[];
    reviews: Review[];
    freelancer: Freelancer & {
      user: User;
    };
  };
};

const Gig = ({ data: gig }: Props) => {
  const totalRating = gig.reviews && gig.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const averageRating = gig.reviews && Math.round(totalRating / gig.reviews.length);

  return (
    <li className="smooth overflow-hidden rounded border bg-white hover:cursor-pointer hover:shadow-lg">
      <Link href={`/${gig.freelancer.user.username}/${gig.id}`}>
        <div className="w-full h-48 relative">
          <Image
            src={gig.thumbnails[0].image}
            alt="Gig Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Details */}
        <div className="space-y-4 p-4">
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
              {averageRating ? (
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
                  <p className="ml-1 text-xs font-medium">
                    ({gig.reviews.length})
                  </p>
                </div>
              ) : (
                <div className="gap-0.1 flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Symbol
                      key={rating}
                      size="small"
                      Icon={StarIcon}
                      isHoverDisabled
                      className="text-slate-300"
                    />
                  ))}
                  <p className="ml-1 text-xs font-medium">0</p>
                </div>
              )}
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
