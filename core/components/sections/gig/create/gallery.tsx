"use client";
import Button from "@core/components/elements/button";
import FileField from "@core/components/elements/fields/file";
import Symbol from "@core/components/elements/symbol";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const initialValues = {
    id: 1,
    src: "",
  };

  const [addImage, setAddImage] = useState([initialValues]);
  const [id, setId] = useState(initialValues.id);
  const [maximumError, setMaximumError] = useState("");

  console.log(addImage);
  return (
    <div className="flex flex-col gap-10">
      <button
        onClick={() => {
          setId(id + 1);
          if (addImage.length + 1 <= 8) {
            setAddImage([
              ...addImage,
              {
                id: Number(id) + 1,
                src: "",
              },
            ]);
          } else {
            setMaximumError("You can add up to 8 images only.");
          }
        }}
        className="grid w-full cursor-pointer place-items-center border-2 border-dashed p-4">
        <div className="flex items-center gap-4">
          <PhotoIcon className="h-6 w-6 text-primary-dark/60" />
          <span className="text-primary-dark/60">Click to add another image</span>
        </div>
      </button>

      <div>
        <h4 className="font-semibold">Images (up to 8)</h4>
        <p className="text-sm font-light">
          Get noticed by the right buyers with visual examples of your services.
        </p>
        <span className="infinite mt-auto cursor-pointer text-xs text-red-500 transition duration-150 ease-in-out hover:animate-shake">
          {maximumError}
        </span>
      </div>

      <div className="grid grid-cols-2 items-center gap-4 tablet:grid-cols-3 laptop:grid-cols-5">
        {addImage.map((image, index) => (
          <div
            key={image.id}
            className="group flex h-40 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed tablet:w-60">
            <Symbol
              Icon={PhotoIcon}
              size="large"
              className="text-primary-dark/40"
            />
            <span className="text-sm text-primary-dark/40">
              Drag & Drop a photo
            </span>
            <span className="text-sm text-primary-dark/40">Browse</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
