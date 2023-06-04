import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import stores from "@core/stores";
import { type Modal as ModalType } from "@core/types/modal";
import validate from "@core/utilities/validate";
import schemas from "@core/validations/schemas";
import cuid from "cuid";
import { useState, type MouseEvent } from "react";
import { ZodIssue } from "zod";

type Props = {
  modal: ModalType;
};

class Year {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

let years: { id: string; name: string }[] = [];

for (let year = 1960; year <= 2050; year++) {
  years.unshift(new Year(cuid(), year.toString()));
}

const Employment = ({ modal }: Props) => {
  const fields = stores.freelancer.employment((state) => state.fields);
  const setFields = stores.freelancer.employment((state) => state.setFields);
  const { employments: setEmployments } = stores.freelancer.base(
    (state) => state.setFields
  );
  const clear = stores.freelancer.employment((state) => state.clear);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.freelancer.employment.safeParse(fields);
    if (result.success) {
      setEmployments(fields);
      handleClear();
      modal.handleClose();
      return;
    }
    setWarnings(result.error.issues);
  };

  const handleClear = () => {
    setWarnings([]);
    clear();
  };

  return (
    <Modal
      title="Employment"
      description="Tell us your work experience."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid grid-cols-2 gap-8">
        <Field.Body
          id="company"
          label="Company Name"
          description="State the Company Name."
          warning={validate(warnings, "company")}>
          <Field.Text
            id="position"
            isFull
            placeholder="Software Developer"
            value={fields.company}
            onChange={setFields.company}
          />
        </Field.Body>
        <Field.Body
          id="position"
          label="Position"
          description="In what position you are working?"
          warning={validate(warnings, "position")}>
          <Field.Text
            id="position"
            isFull
            placeholder="Software Developer"
            value={fields.position}
            onChange={setFields.position}
          />
        </Field.Body>
      </div>
      <Field.Body
        id="description"
        label="Description"
        description="Tell us what are your responsibilities at work."
        warning={validate(warnings, "description")}>
        <Field.Textarea
          id="description"
          isFull
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum enim blanditiis nobis facilis modi ut. Libero temporibus ipsum, quisquam sapiente aliquid magnam nobis optio, dolorum ipsam reiciendis, consectetur provident."
          value={fields.description}
          onChange={setFields.description}
        />
      </Field.Body>
      <div className="grid grid-cols-3 gap-8">
        <Field.Body
          id="location"
          label="Country"
          description="In which Country does your Company in?"
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
          id="from"
          label="From Year"
          description="In what year did you start your work?"
          warning={validate(warnings, "from")}>
          <Field.Select.Combo
            options={years}
            value={fields.from}
            setValue={setFields.from}
          />
        </Field.Body>
        <Field.Body
          id="to"
          label="To Year"
          description="In what year did you end your work?"
          warning={validate(warnings, "to")}>
          <Field.Select.Combo
            options={years}
            value={fields.to}
            setValue={setFields.to}
          />
        </Field.Body>
      </div>
      <Field.Body
        id="active"
        label="Are you currently working here?"
        description="Check the box if your are still working here."
        warning={validate(warnings, "isActive")}>
        <Field.Check
          id="active"
          isChecked={fields.isActive}
          onChange={setFields.isActive}>
          Still Active?
        </Field.Check>
      </Field.Body>
      <div className="flex w-full gap-4">
        <Button onClick={handleSubmit}>Add Employment</Button>
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
        <Button
          variant="tertiary"
          onClick={modal.handleClose}
          className="ml-auto">
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default Employment;
