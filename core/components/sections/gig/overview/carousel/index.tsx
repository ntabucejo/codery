"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Thumbnail } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";

type Props = {
  thumbnails: Thumbnail[];
};

const Carousel = ({ thumbnails }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full">
        <Image
          src={thumbnails[index].image}
          alt={thumbnails[index].title}
          fill
          className="rounded object-cover"
        />
        <div className="absolute z-10 flex h-full w-full items-center justify-between px-4">
          <Button
            Icon={ChevronLeftIcon}
            onClick={() =>
              setIndex(index === 0 ? thumbnails.length - 1 : index - 1)
            }
            direction="previous"
          />
          <Button
            Icon={ChevronRightIcon}
            onClick={() =>
              setIndex(index === thumbnails.length - 1 ? 0 : index + 1)
            }
            direction="next"
          />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4">
        {thumbnails.map(({ id, image }, idx) => (
          <button
            key={id}
            onClick={() => setIndex(idx)}
            className={`${
              idx === index ? "brightness-[0.6]" : ""
            } smooth relative aspect-video overflow-hidden rounded`}>
            <Image src={image} alt={image} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
