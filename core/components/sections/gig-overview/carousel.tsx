"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
  return (
    <div className="relative grid grid-flow-col overflow-hidden px-20 mt-10">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>
      ))}
      {/* left button */}
      <button className="absolute top-1/2 left-0 grid h-10 w-10 -translate-y-1/2 transform place-items-center rounded-full bg-white shadow-md">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* left button */}
      <button className="absolute top-1/2 right-0 grid h-10 w-10 -translate-y-1/2 transform place-items-center rounded-full bg-white shadow-md">
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
