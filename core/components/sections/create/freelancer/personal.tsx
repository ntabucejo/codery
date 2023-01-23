import Field from "@core/components/elements/field";
import {
  FreelancerErrors,
  type FreelancerFields,
} from "@core/validations/freelancer";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
  fields: FreelancerFields;
  setFields: Dispatch<SetStateAction<FreelancerFields>>;
  errors: FreelancerErrors;
};

const Personal = ({ fields, setFields, errors }: Props) => {
  return (
    <form className="space-y-4">
      <Field.Body
        id="biography"
        label="Biography"
        description="Tell me about yourself"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.biography}>
        <Field.Textarea
          id="biography"
          isFull
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, soluta explicabo qui quidem, suscipit doloremque voluptas perspiciatis dicta optio nam temporibus minus aliquid voluptatum ratione corporis est laboriosam? Mollitia, non!"
          value={fields.biography}
          onChange={(event) =>
            setFields({ ...fields, biography: event.target.value })
          }
        />
      </Field.Body>
      <Field.Body
        id="location"
        label="Location"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.location}>
        <Field.Text
          id="location"
          isFull
          placeholder="Philippines"
          value={fields.location}
          onChange={(event) =>
            setFields({ ...fields, location: event.target.value })
          }
        />
      </Field.Body>
      <Field.Body
        id="phone"
        label="Phone"
        description="State your Phone Number"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.phone}>
        <Field.Text
          id="phone"
          isFull
          placeholder="+63 123456789"
          value={fields.phone}
          onChange={(event) =>
            setFields({ ...fields, phone: event.target.value })
          }
        />
      </Field.Body>
    </form>
  );
};

export default Personal;
