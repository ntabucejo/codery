"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
    <div className="space-y-4">
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
            onClick={() =>
              setIndex(index === 0 ? images.length - 1 : index - 1)
            }
            direction="previous"
          />
          <Button
            Icon={ChevronRightIcon}
            onClick={() =>
              setIndex(index === images.length - 1 ? 0 : index + 1)
            }
            direction="next"
          />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4">
        {images.map((image, idx) => (
          <button
            key={image.id}
            onClick={() => setIndex(idx)}
            className={`${
              idx === index ? "brightness-[0.6]" : ""
            } smooth relative aspect-video overflow-hidden rounded`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
