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
    <div className="group relative aspect-video w-full overflow-hidden rounded border">
      <Image
        src={thumbnails[index].image}
        alt={thumbnails[index].title}
        fill
        className="rounded object-contain"
      />
      <div className="smooth absolute z-30 flex h-full w-full items-center justify-between px-4 opacity-0 group-hover:opacity-100">
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
      <div className="smooth absolute inset-0 z-20 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100" />
      <div className="smooth absolute bottom-4 z-30 w-full space-y-4 p-4 opacity-0 group-hover:opacity-100">
        <div className="space-y-1">
          <h4 className="text-2xl font-semibold text-primary-light">
            {thumbnails[index].title}
          </h4>
          <p className="font-medium text-primary-light">
            {thumbnails[index].description}
          </p>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {thumbnails.map(({ id, image }, idx) => (
            <button
              key={id}
              onClick={() => setIndex(idx)}
              className={`${
                idx === index ? "border-2 brightness-[0.6]" : ""
              } smooth relative aspect-video overflow-hidden rounded`}>
              <Image src={image} alt={image} fill className="object-contain" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
