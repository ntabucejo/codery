import { useState, type FormEvent } from "react";

type Image = {
  name: string;
};

const image = ({ name }: Image) => {
  const [data, setData] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      // @ts-expect-error
      (element) => element.name === "file"
    );
    const formData = new FormData();
    // @ts-expect-error
    for (const file of fileInput?.files) {
      formData.append(name, file);
    }
    formData.append("upload_preset", "codery");
    const endpoint = "https://api.cloudinary.com/v1_1/ntabucejo/image/upload";
    const response = await fetch(endpoint, { method: "POST", body: formData });
    const data = await response.json();

    setData(data.secure_url);

    return data;
  };

  const handleChange = async (event: FormEvent<HTMLFormElement>) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      // @ts-expect-error
      setData(onLoadEvent.target.result);
    };
    // @ts-expect-error
    reader.readAsDataURL(event.target.files[0]);

    return await handleSubmit(event);
  };

  return { data, handleSubmit, handleChange };
};

export default image;
