"use client";

import Field from "@core/components/elements/field";
import Symbol from "@core/components/elements/symbol";
import { PhotoIcon } from "@heroicons/react/24/solid";

const Showcase = () => {
  return (
    <form className="space-y-4">
      <Field.Body
        id="Upload Images"
        label="Upload Images"
        description="Get noticed by the right buyers with visual examples of your services."
        tooltip="By uploading images you will have a higher chance of getting a client.">
        <Field.File id="Upload Images" />
      </Field.Body>
      <ul className="grid grid-cols-4 gap-4">
        <li className="grid aspect-video items-center rounded border bg-white">
          <div className="mx-auto flex flex-col items-center">
            <Symbol Icon={PhotoIcon} size="large" isHoverDisabled />
            <span className="text-sm font-semibold text-primary-dark/fade">
              No Image Uploaded
            </span>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default Showcase;
