import Field from "@core/components/elements/field";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import { ZodIssue } from "zod";

type Props = {
  warnings: ZodIssue[];
};

const Personal = ({ warnings }: Props) => {
  const fields = stores.freelancer.base((state) => state.fields);
  const setFields = stores.freelancer.base((state) => state.setFields);

  return (
    <form className="space-y-4">
      <Field.Body
        id="biography"
        label="Biography"
        description="Tell me about yourself"
        tooltip="Any information needed here in the form are safe and private."
        warning={validate(warnings, "biography")}>
        <Field.Textarea
          id="biography"
          isFull
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, soluta explicabo qui quidem, suscipit doloremque voluptas perspiciatis dicta optio nam temporibus minus aliquid voluptatum ratione corporis est laboriosam? Mollitia, non!"
          value={fields.biography}
          onChange={setFields.biography}
        />
      </Field.Body>
      <Field.Body
        id="location"
        label="Location"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        warning={validate(warnings, "location")}>
        <Field.Text
          id="location"
          isFull
          placeholder="Philippines"
          value={fields.location}
          onChange={setFields.location}
        />
      </Field.Body>
      <Field.Body
        id="phone"
        label="Phone"
        description="State your Phone Number"
        tooltip="Any information needed here in the form are safe and private."
        warning={validate(warnings, "phone")}>
        <Field.Text
          id="phone"
          isFull
          placeholder="+63 123456789"
          value={fields.phone}
          onChange={setFields.phone}
        />
      </Field.Body>
    </form>
  );
};

export default Personal;
