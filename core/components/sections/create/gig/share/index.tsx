import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import { GigErrors, type GigFields } from "@core/validations/gig";
import Image from "next/image";
import { type Dispatch, type SetStateAction } from "react";
import Thumbnail from "./thumbnail";

type Props = {
  fields: GigFields;
  setFields: Dispatch<SetStateAction<GigFields>>;
  errors: GigErrors;
};

const Share = ({ fields, setFields, errors }: Props) => {
  const modalShowcase = useModal();

  return (
    <div className="space-y-4">
      <Field.Body
        id="thumbnail"
        label="Thumbnail"
        description="Get noticed by the right buyers with visual examples of your services."
        tooltip="By uploading images you will have a higher chance of getting a client."
        error={errors.thumbnails}>
        <Button onClick={modalShowcase.handleOpen}>Add Showcase</Button>
        {fields.thumbnails.length ? (
          <ul className="grid grid-cols-4 gap-4">
            {fields.thumbnails.map((thumbnail) => (
              <li
                key={thumbnail.image}
                className="relative grid aspect-video items-center overflow-hidden rounded border bg-white">
                <Image
                  src={thumbnail.image}
                  alt={thumbnail.image}
                  fill
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        ) : null}
        <Thumbnail
          fields={fields}
          setFields={setFields}
          modal={modalShowcase}
        />
      </Field.Body>
    </div>
  );
};

export default Share;
