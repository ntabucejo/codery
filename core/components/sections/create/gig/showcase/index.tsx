import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import Image from "next/image";
import { ZodIssue } from "zod";
import Thumbnail from "./thumbnail";

type Props = {
  warnings: ZodIssue[];
};

const Showcase = ({ warnings }: Props) => {
  const fields = stores.gig.base((state) => state.fields);
  const modalShowcase = useModal();

  return (
    <div className="space-y-6">
      <Field.Body
        id="thumbnail"
        label="Thumbnail"
        description="Encourage buyers to choose your Gig by featuring a variety of your work. (up to 8)"
        tooltip="By uploading images you will have a higher chance of getting a client."
        warning={validate(warnings, "thumbnails")}>
        <Button onClick={modalShowcase.handleOpen}>Add Thumbnail</Button>
        {fields.thumbnails?.length ? (
          <ul className="grid grid-cols-5 gap-4">
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
        <Thumbnail modal={modalShowcase} />
      </Field.Body>
    </div>
  );
};

export default Showcase;
