"use client";

import useUpload from "@core/hooks/use-upload";
import Image from "next/image";
import { useState } from "react";

const UploadImage = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://images.unsplash.com/photo-1593341832681-6cb2ce1ed053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  );

  const { handleSubmit, handleChange } = useUpload({
    setData: setImageSrc,
    name: "file",
  });

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input type="file" name="file" />
      <div className="relative h-80 w-80 overflow-hidden">
        <Image src={imageSrc} alt="Image" fill className="object-cover" />
      </div>
      <button>Upload</button>
    </form>
  );
};

export default UploadImage;
