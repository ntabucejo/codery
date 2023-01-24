import Field from "@core/components/elements/field";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import cuid from "cuid";
import { ZodIssue } from "zod";

const options = [
  { id: cuid(), name: "Wade Cooper" },
  { id: cuid(), name: "Arlene Mccoy" },
  { id: cuid(), name: "Devon Webb" },
  { id: cuid(), name: "Tom Cook" },
  { id: cuid(), name: "Tanya Fox" },
  { id: cuid(), name: "Hellen Schmidt" },
];

type Props = {
  warnings: ZodIssue[];
};

const General = ({ warnings }: Props) => {
  const fields = stores.gig.base((state) => state.fields);
  const setFields = stores.gig.base((state) => state.setFields);

  return (
    <form className="space-y-4">
      <Field.Body
        id="Project Title"
        label="Project Title"
        description="This will help your gig to recognize instantaneously."
        tooltip="This is about the description of your gig"
        warning={validate(warnings, "title")}>
        <Field.Text
          id="Project Title"
          isFull
          placeholder="I will..."
          value={fields.title}
          onChange={setFields.title}
        />
      </Field.Body>
      <Field.Body
        id="Project Description"
        label="Project Description"
        description="Briefly Describe Your Gig."
        tooltip="Clients will know what category or language you can do about this gig."
        warning={validate(warnings, "description")}>
        <Field.Textarea
          id="Project Description"
          isFull
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quisquam aut fugit ipsum nisi. Quaerat maiores laboriosam iure sunt vero tenetur minima quos exercitationem perspiciatis pariatur. Dolor laborum optio ipsa!"
          value={fields.description}
          onChange={setFields.description}
        />
      </Field.Body>
      <Field.Body
        id="Project Category"
        label="Project Category"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars."
        warning={validate(warnings, "category")}>
        <Field.Select.Combo
          options={options}
          value={fields.category}
          setValue={setFields.category}
        />
      </Field.Body>
      <div className="grid grid-cols-4 gap-4">
        <Field.Body
          id="Delivery Period"
          label="Delivery Period"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          warning={validate(warnings, "period")}
          className="col-span-2">
          <Field.Number
            id="period"
            value={fields.period}
            onChange={setFields.period}
          />
        </Field.Body>
        <Field.Body
          id="Technologies"
          label="Technologies"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          warning={validate(warnings, "tags")}
          className="col-span-2 row-span-2">
          <Field.Select.Multiple
            options={options}
            values={fields.tags}
            setValues={setFields.tags}
          />
        </Field.Body>
        <Field.Body
          id="Price Range"
          label="Price Range"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          className="col-span-2">
          <div className="grid grid-cols-2 gap-8">
            <Field.Body
              id="from"
              label="Price Range"
              tooltip="All prices should start from 50 dollars."
              warning={validate(warnings, "from")}>
              <Field.Number
                id="Price Range"
                isFull
                value={fields.from}
                onChange={setFields.from}
              />
            </Field.Body>
            <Field.Body
              id="to"
              label="To"
              tooltip="All prices should start from 50 dollars."
              warning={validate(warnings, "to")}>
              <Field.Number
                id="Price Range"
                isFull
                value={fields.to}
                onChange={setFields.to}
              />
            </Field.Body>
          </div>
        </Field.Body>
      </div>
    </form>
  );
};

export default General;
