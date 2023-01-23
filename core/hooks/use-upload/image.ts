import { useState, type FormEvent } from "react";

type Image = {
  name: string;
};

const image = ({ name }: Image) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      // @ts-expect-error
      (element) => element.name === name
    );
    const formData = new FormData();
    // @ts-expect-error
    for (const file of fileInput?.files) {
      formData.append(name, file);
    }
    formData.append("upload_preset", "codery");
    const endpoint = "https://api.cloudinary.com/v1_1/ntabucejo/image/upload";
    setLoading(true);
    const response = await fetch(endpoint, { method: "POST", body: formData });
    const data = await response.json();
    setLoading(false);
    setData("");
    return data.secure_url;
  };

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      // @ts-expect-error
      setData(onLoadEvent.target.result);
    };
    // @ts-expect-error
    reader.readAsDataURL(event.target.files[0]);
  };

  return { data, handleSubmit, handleChange, loading };
};

export default image;
