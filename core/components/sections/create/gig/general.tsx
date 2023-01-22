import Field from "@core/components/elements/field";
import { type GigSchema } from "@core/schemas/gig";
import cuid from "cuid";
import { type SetStateAction, type Dispatch } from "react";

const options = [
  { id: cuid(), name: "Wade Cooper" },
  { id: cuid(), name: "Arlene Mccoy" },
  { id: cuid(), name: "Devon Webb" },
  { id: cuid(), name: "Tom Cook" },
  { id: cuid(), name: "Tanya Fox" },
  { id: cuid(), name: "Hellen Schmidt" },
];

type Props = {
  fields: GigSchema;
  setFields: Dispatch<SetStateAction<GigSchema>>;
  errors: any;
};

const General = ({ fields, setFields, errors }: Props) => {
  return (
    <form className="space-y-4">
      <Field.Body
        id="Project Title"
        label="Project Title"
        description="This will help your gig to recognize instantaneously."
        tooltip="This is about the description of your gig"
        error={errors["title"]}>
        <Field.Text
          id="Project Title"
          isFull
          placeholder="I will..."
          value={fields.title}
          onChange={(event) =>
            setFields({ ...fields, title: event.target.value })
          }
        />
      </Field.Body>
      <Field.Body
        id="Project Description"
        label="Project Description"
        description="Briefly Describe Your Gig."
        tooltip="Clients will know what category or language you can do about this gig."
        error={errors["description"]}>
        <Field.Textarea
          id="Project Description"
          isFull
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quisquam aut fugit ipsum nisi. Quaerat maiores laboriosam iure sunt vero tenetur minima quos exercitationem perspiciatis pariatur. Dolor laborum optio ipsa!"
          value={fields.description}
          onChange={(event) =>
            setFields({ ...fields, description: event.target.value })
          }
        />
      </Field.Body>
      <Field.Body
        id="Project Category"
        label="Project Category"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars."
        error={errors["category"]}>
        <Field.Select.Combo
          options={options}
          name="category"
          value={fields.category}
          setValue={setFields}
        />
      </Field.Body>
      <div className="grid grid-cols-4 gap-4">
        <Field.Body
          id="Delivery Period"
          label="Delivery Period"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          error={errors["period"]}
          className="col-span-2">
          <Field.Select.List
            options={options}
            name="period"
            value={fields.period}
            setValue={setFields}
          />
        </Field.Body>
        <Field.Body
          id="Technologies"
          label="Technologies"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          error={errors["tags"]}
          className="col-span-2 row-span-2">
          <Field.Select.Multiple
            options={options}
            name="tags"
            value={fields.tags}
            setValue={setFields}
          />
        </Field.Body>
        <Field.Body
          id="Price Range"
          label="Price Range"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          error={errors["price"]}
          className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <Field.Number
              id="Price Range"
              isFull
              value={fields.price.minimum}
              onChange={(event) =>
                setFields({
                  ...fields,
                  price: { ...fields.price, minimum: +event.target.value },
                })
              }
            />
            <Field.Number
              id="Price Range"
              isFull
              value={fields.price.maximum}
              onChange={(event) =>
                setFields({
                  ...fields,
                  price: { ...fields.price, maximum: +event.target.value },
                })
              }
            />
          </div>
        </Field.Body>
      </div>
    </form>
  );
};

export default General;
