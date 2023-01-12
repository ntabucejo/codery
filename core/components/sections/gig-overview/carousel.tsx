"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

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
  const [count, setCount] = useState(0);
  return (
    <div className="relative mt-10 grid h-[500px] w-full grid-flow-col overflow-hidden px-20">
      <div className="relative">
        <Image
          src={images[count].src}
          alt={images[count].alt}
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
      {/* left button */}
      <button
        onClick={() => {
          setCount(count - 1);
          if (count < images.length - 2) setCount(images.length - 1);
        }}
        className="smooth absolute top-1/2 left-0 grid h-10 w-10 -translate-y-1/2 transform place-items-center rounded-full bg-white shadow-md hover:scale-105">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* left button */}
      <button
        onClick={() => {
          setCount(count + 1);
          if (count > images.length - 2) setCount(0);
        }}
        className="smooth absolute top-1/2 right-0 grid h-10 w-10 -translate-y-1/2 transform place-items-center rounded-full bg-white shadow-md hover:scale-105">
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
