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
    <div className="group space-y-2">
      <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded">
        <div className="absolute z-10 h-full w-full">
          <Image
            src={thumbnails[index].image}
            alt={thumbnails[index].title}
            fill
            className="rounded object-cover"
          />
        </div>
        <div className="relative z-10 h-full w-full bg-white/10 backdrop-blur-lg">
          <Image
            src={thumbnails[index].image}
            alt={thumbnails[index].title}
            fill
            className="rounded object-contain"
          />
          <div className="smooth absolute z-10 flex h-full w-full items-center justify-between px-8 opacity-0 group-hover:opacity-100">
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
        <div className="smooth group absolute bottom-0 left-0 z-10 w-full p-4 opacity-0 hover:opacity-100">
          <div className="smooth absolute inset-0 z-10 bg-white/50 to-transparent opacity-0 backdrop-blur-lg group-hover:opacity-100" />
          <div className="relative z-10 space-y-1">
            <h4 className="text-primary-white text-3xl font-extrabold">
              {thumbnails[index].title}
            </h4>
            <p className="text-sm font-medium text-primary-dark">
              {thumbnails[index].description}
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-[repeat(10,1fr)] gap-4 overflow-x-auto scrollbar-hide">
        {thumbnails.map(({ id, image }, idx) => (
          <button
            key={id}
            onClick={() => setIndex(idx)}
            className={`${
              idx === index ? "brightness-[0.6]" : ""
            } smooth relative aspect-video w-32 overflow-hidden rounded`}>
            <Image src={image} alt={image} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
