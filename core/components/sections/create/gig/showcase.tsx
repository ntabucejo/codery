import Field from "@core/components/elements/field";
import Symbol from "@core/components/elements/symbol";
import useUpload from "@core/hooks/use-upload";
import { type GigSchema } from "@core/schemas/gig";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
  fields: GigSchema;
  setFields: Dispatch<SetStateAction<GigSchema>>;
  errors: any;
};

const Showcase = ({ fields, setFields, errors }: Props) => {
  const { handleChange } = useUpload.image({
    name: "file",
  });

  return (
    <form
      onChange={async (event) => {
        const data = await handleChange(event);
        setFields({
          ...fields,
          showcases: [...fields.showcases, { image: data.secure_url }],
        });
      }}
      className="space-y-4">
      <Field.Body
        id="Upload Images"
        label="Upload Images"
        description="Get noticed by the right buyers with visual examples of your services."
        tooltip="By uploading images you will have a higher chance of getting a client."
        error={errors["showcases"]}>
        <Field.File id="Upload Images" name="file" />
        <ul className="grid grid-cols-4 gap-4">
          {fields.showcases.length
            ? fields.showcases.map((showcase) => (
                <li
                  key={showcase.image}
                  className="relative grid aspect-video items-center overflow-hidden rounded border bg-white">
                  <Image
                    src={showcase.image}
                    alt={showcase.image}
                    fill
                    className="object-cover"
                  />
                </li>
              ))
            : null}
          <li className="grid aspect-video items-center rounded border bg-white">
            <div className="mx-auto flex flex-col items-center">
              <Symbol Icon={PhotoIcon} size="large" isHoverDisabled />
              <span className="text-sm font-semibold text-primary-dark/fade">
                No Image Uploaded
              </span>
            </div>
          </li>
        </ul>
      </Field.Body>
    </form>
  );
};

export default Showcase;
