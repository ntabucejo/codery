import { type FormEvent } from "react";

type UseUpload = {
  setData: any;
  inputName: string;
};

const useUpload = ({ setData, inputName }: UseUpload) => {
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
      formData.append(inputName, file);
    }
    formData.append("upload_preset", "codery");
    const endpoint = "https://api.cloudinary.com/v1_1/ntabucejo/image/upload";
    const response = await fetch(endpoint, { method: "POST", body: formData });
    const data = await response.json();

    setData(data.secure_url);

    return data;
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

  return { handleSubmit, handleChange };
};

export default useUpload;
