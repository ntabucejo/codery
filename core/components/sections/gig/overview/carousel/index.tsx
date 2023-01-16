"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";

const images = [
  {
    id: 1,
    src: "/carousel/carousel1.jpg",
    alt: "image 1",
  },
  {
    id: 2,
    src: "/carousel/carousel2.jpg",
    alt: "image 2",
  },
  {
    id: 3,
    src: "/carousel/carousel3.jpg",
    alt: "image 2",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative aspect-video w-full">
      <Image
        src={images[index].src}
        alt={images[index].alt}
        fill
        className="rounded object-cover"
      />
      <div className="absolute z-10 flex h-full w-full items-center justify-between px-4">
        <Button
          Icon={ChevronLeftIcon}
          onClick={() => setIndex(index - 1)}
          direction="previous"
        />
        <Button
          Icon={ChevronRightIcon}
          onClick={() => setIndex(index + 1)}
          direction="next"
        />
      </div>
    </div>
  );
};

export default Carousel;
