import stores from "@core/stores";
import Field from "@core/components/elements/field";
import Carousel from "@core/components/sections/gig/overview/carousel";
import { MouseEvent } from "react";
import { ZodIssue } from "zod";
import Button from "@core/components/elements/button";
import validate from "@core/utilities/validate";
import Symbol from "@core/components/elements/symbol";
import { PhotoIcon } from "@heroicons/react/24/outline";
import NoImage from "@core/components/elements/no-image";

type Props = {
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  warnings: ZodIssue[];
};

const Overview = ({ handleSubmit, warnings }: Props) => {
  const fields = stores.gig.base((state) => state.fields);

  const thumbnails = fields.thumbnails?.map((thumbnail, index) => {
    return {
      ...thumbnail,
      id: index,
      gigId: index,
    };
  });

  return (
    <div className="space-y-4">
      <div className="grid space-x-4 laptop:grid-cols-2">
        <div className="space-y-4">
          <Field.Body
            id="title"
            label="Gig Title"
            warning={validate(warnings, "title")}>
            <Field.Text id="title" isFull value={fields.title} isDisabled />
          </Field.Body>

          <Field.Body
            id="description"
            label="Gig Description"
            warning={validate(warnings, "description")}>
            <Field.Textarea
              id="description"
              isFull
              value={fields.description}
              isDisabled
            />
          </Field.Body>

          <Field.Body
            id="category"
            label="Category"
            warning={validate(warnings, "category")}>
            <Field.Select.Combo value={fields.category} isDisabled />
          </Field.Body>

          <Field.Body
            id="tags"
            label="Technologies"
            warning={validate(warnings, "tags")}>
            <Field.Select.Multiple values={fields.tags} isDisabled />
          </Field.Body>

          <Field.Body
            id="period"
            label="Delivery Time"
            className="col-span-2"
            warning={validate(warnings, "period")}>
            <Field.Number id="period" value={fields.period} isDisabled />
          </Field.Body>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <Field.Body
              id="from"
              label="Starting Price"
              warning={validate(warnings, "from")}>
              <Field.Number id="from" isFull value={fields.from} isDisabled />
            </Field.Body>
            <Field.Body
              id="to"
              label="Up to"
              warning={validate(warnings, "to")}>
              <Field.Number id="to" isFull value={fields.to} isDisabled />
            </Field.Body>
          </div>
        </div>

        <Field.Body id="thumbnail" label="Thumbnail">
          {thumbnails?.length ? (
            // @ts-ignore
            <Carousel thumbnails={fields.thumbnails} />
          ) : (
            <NoImage />
          )}
        </Field.Body>
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={handleSubmit}>Publish Gig</Button>
        <Button variant="secondary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Overview;
