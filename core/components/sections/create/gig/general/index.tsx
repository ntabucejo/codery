import Field from "@core/components/elements/field";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import useSWR from "swr";
import { ZodIssue } from "zod";

type Props = {
  warnings: ZodIssue[];
};

const General = ({ warnings }: Props) => {
  const fields = stores.gig.base((state) => state.fields);
  const setFields = stores.gig.base((state) => state.setFields);

  const { data: technologies } = useSWR("/api/data/technologies", {
    fallbackData: [],
  });
  const { data: categories } = useSWR("/api/data/categories", {
    fallbackData: [],
  });

  return (
    <form className="space-y-4">
      <Field.Body
        id="title"
        label="Gig Title"
        description="As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours."
        tooltip="This is your Gig title. Choose wisely, you can only use 80 characters."
        warning={validate(warnings, "title")}>
        <Field.Text
          id="title"
          isFull
          placeholder="I will..."
          value={fields.title}
          onChange={setFields.title}
        />
      </Field.Body>
      <Field.Body
        id="description"
        label="Gig Description"
        description="Briefly Describe Your Gig."
        tooltip="Describe what you are offering. Be as detailed as possible so buyers will be able to understand if this meets their needs. Should be at least 120 characters."
        warning={validate(warnings, "description")}>
        <Field.Textarea
          id="description"
          isFull
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quisquam aut fugit ipsum nisi. Quaerat maiores laboriosam iure sunt vero tenetur minima quos exercitationem perspiciatis pariatur. Dolor laborum optio ipsa!"
          value={fields.description}
          onChange={setFields.description}
        />
      </Field.Body>
      <div className="grid grid-cols-4 gap-4">
        <Field.Body
          id="category"
          label="Category"
          description="Choose the category most suitable for your Gig."
          tooltip="Please choose the category most suitable for your Gig."
          warning={validate(warnings, "category")}
          className="col-span-2">
          <Field.Select.Combo
            options={categories}
            value={fields.category}
            setValue={setFields.category}
          />
        </Field.Body>
        <Field.Body
          id="tags"
          label="Technologies"
          description="Tag your Gig with techonologies words that are relevant to the services you offer."
          tooltip="Choose the technologies you will use for this gig."
          warning={validate(warnings, "tags")}
          className="col-span-2">
          <Field.Select.Multiple
            options={technologies}
            values={fields.tags}
            setValues={setFields.tags}
          />
        </Field.Body>
        <Field.Body
          id="period"
          label="Delivery Time"
          description="Choose when you can finish your service."
          tooltip="Delivery Time is the amount of time you have to work on the package, starting from when a buyer places the order."
          warning={validate(warnings, "period")}
          className="col-span-2">
          <Field.Number
            id="period"
            value={fields.period}
            onChange={setFields.period}
          />
        </Field.Body>
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <Field.Body
            id="from"
            label="Starting Price"
            description="Set your starting price."
            tooltip="All prices should start from 5 dollars."
            warning={validate(warnings, "from")}>
            <Field.Number
              id="from"
              isFull
              value={fields.from}
              onChange={setFields.from}
            />
          </Field.Body>
          <Field.Body
            id="to"
            label="Up to"
            description="Set your highest price based on your skill."
            tooltip="You can set your maximum price up to 1000 dollars."
            warning={validate(warnings, "to")}>
            <Field.Number
              id="to"
              isFull
              value={fields.to}
              onChange={setFields.to}
            />
          </Field.Body>
        </div>
      </div>
    </form>
  );
};

export default General;
