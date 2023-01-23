import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import { GigErrors, type GigFields } from "@core/validations/gig";
import Image from "next/image";
import { type Dispatch, type SetStateAction } from "react";
import Showcase from "./showcase";

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
        id="showcase"
        label="Showcase"
        description="Get noticed by the right buyers with visual examples of your services."
        tooltip="By uploading images you will have a higher chance of getting a client."
        error={errors.showcases}>
        <Button onClick={modalShowcase.handleOpen}>Add Showcase</Button>
        {fields.showcases.length ? (
          <ul className="grid grid-cols-4 gap-4">
            {fields.showcases.map((showcase) => (
              <li
                key={showcase.image}
                className="relative grid aspect-video items-center overflow-hidden rounded border bg-white">
                <Image
                  src={showcase.image}
                  alt={showcase.image}
                  fill
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        ) : null}
        <Showcase fields={fields} setFields={setFields} modal={modalShowcase} />
      </Field.Body>
    </div>
  );
};

export default Share;
