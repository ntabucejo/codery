"use client";
import FileField from "@core/components/elements/fields/file";
import { PhotoIcon } from "@heroicons/react/24/solid";
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
        className="grid w-full cursor-pointer place-items-center border-2 border-dashed p-6">
        <div className="flex items-center gap-4">
          <PhotoIcon className="h-6 w-6" />
          <span>Click to add another image</span>
        </div>
      </button>

      <div>
        <h4 className="font-semibold">Images (up to 8)</h4>
        <p className="text-sm font-light">
          Get noticed by the right buyers with visual examples of your services.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 laptop:grid-cols-3">
        {addImage.map((image, index) => (
          <div
            key={image.id}
            className="relative grid cursor-pointer place-items-center gap-4 border-2 border-dashed p-6">
            <div className="absolute -top-4 -left-3 z-50  border-2 bg-white p-1 px-3 font-semibold">
              {image.id}
            </div>
            <div className="relative h-80 w-80 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1593341832681-6cb2ce1ed053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Image"
                fill
                className="object-cover"
              />
            </div>
            <FileField
              handleChange={(event) => {
                if (image.id === index) {
                  setAddImage([
                    ...addImage,
                    { id: image.id, src: event.target.value },
                  ]);
                }
              }}
            />
          </div>
        ))}
        <span className="infinite mt-auto cursor-pointer text-xs text-red-500 transition duration-150 ease-in-out hover:animate-shake">
          {maximumError}
        </span>
      </div>
    </div>
  );
};

export default Gallery;
