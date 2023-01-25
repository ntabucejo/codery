"use client";

import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import Pin from "@core/components/elements/pin";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Freelancer, User } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  freelancer: Freelancer & {
    user: User;
  };
};

const About = ({ freelancer }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 rounded p-4">
      <div className="flex items-center gap-3 pr-2">
        <Avatar src={freelancer.user.image!} alt="Avatar" size="medium" />
        <div className="flex flex-col">
          <h4 className="font-bold">{freelancer.user.name}</h4>
          <Pin size="small" Icon={MapPinIcon}>
            {freelancer.user.location}
          </Pin>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          isFull
          onClick={() => router.push(`/${freelancer.user.username}`)}>
          Profile
        </Button>
        <Button variant="secondary">Message</Button>
      </div>
      <p className="text-sm">{freelancer.user.biography}</p>
    </div>
  );
};

export default About;
