"use client";

import Avatar from "@core/components/elements/avatar";
import Badge from "@core/components/elements/badge";
import Button from "@core/components/elements/button";
import Pin from "@core/components/elements/pin";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  Category,
  Freelancer,
  Gig,
  Skill,
  Tag,
  Technology,
  Thumbnail,
  User,
} from "@prisma/client";
import { useRouter, usePathname } from "next/navigation";
import Group from "./group";

type Props = {
  user:
    | (User & {
        freelancer: Freelancer | null;
      })
    | null;
  gig: Gig & {
    tags: (Tag & {
      technology: Technology | null;
    })[];
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      skills: (Skill & {
        technology: Technology | null;
      })[];
      user: User;
    };
  };
};

const Details = ({ user, gig }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMakeOrder = () => {
    router.replace(`${pathname}?chat=1`);
  };

  return (
    <div className="flex flex-col gap-4 rounded p-4">
      <div
        className="flex cursor-pointer items-center gap-3 pr-2"
        onClick={() => router.push(`/${gig.freelancer.user.username}`)}>
        <Avatar src={gig.freelancer.user.image!} alt="Avatar" size="medium" />
        <div className="flex flex-col">
          <h4 className="font-bold">{gig.freelancer.user.name}</h4>
          <Pin size="small" Icon={MapPinIcon}>
            {gig.freelancer.user.location}
          </Pin>
        </div>
      </div>
      {gig.freelancer.userId !== user?.id ? (
        <Button onClick={handleMakeOrder} isFull>
          Order {`$${gig.from} - $${gig.to}`}
        </Button>
      ) : null}
      <Group name="About Me">
        <p className="text-sm">{gig.freelancer.user.biography}</p>
      </Group>
      <Group name="Category">
        <p className="text-sm">{gig.category.name}</p>
      </Group>
      <Group name="Technologies">
        <ul className="flex items-center gap-4">
          {gig.tags.map(({ id, technology }) => (
            <Badge key={id} name={technology!.name} />
          ))}
        </ul>
      </Group>
    </div>
  );
};

export default Details;
