import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import stores from "@core/stores";
import { type Modal as ModalType } from "@core/types/modal";
import validate from "@core/utilities/validate";
import schemas from "@core/validations/schemas";
import cuid from "cuid";
import { MouseEvent, useState } from "react";
import { ZodIssue } from "zod";

type Props = {
  modal: ModalType;
};

class Degree {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Area {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

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

let degrees: { id: string; name: string }[] = [
  new Degree(cuid(), "BS Computer Science"),
  new Degree(cuid(), "BS Information Technology"),
  new Degree(cuid(), "BS Computer Engineering"),
  new Degree(cuid(), "BS Electrical Engineering"),
];

let areas: { id: string; name: string }[] = [
  new Area(cuid(), "Software"),
  new Area(cuid(), "Hardware"),
  new Area(cuid(), "Both Software and Hardware"),
];

const Education = ({ modal }: Props) => {
  const fields = stores.freelancer.education((state) => state.fields);
  const setFields = stores.freelancer.education((state) => state.setFields);
  const { educations: setEducations } = stores.freelancer.base(
    (state) => state.setFields
  );
  const clear = stores.freelancer.education((state) => state.clear);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.freelancer.education.safeParse(fields);
    if (result.success) {
      setEducations(fields);
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
      title="Education"
      description="Describe your educational background. It will help clients get to know you!"
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <Field.Body
        id="school"
        label="University Name"
        description="State your university's name."
        warning={validate(warnings, "school")}>
        <Field.Text
          id="school"
          isFull
          placeholder="Juan Jose University"
          value={fields.school}
          onChange={setFields.school}
        />
      </Field.Body>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <Field.Body
          id="degree"
          label="Field"
          description="What is your major field?"
          warning={validate(warnings, "degree")}>
          <Field.Select.Combo
            options={degrees}
            value={fields.degree}
            setValue={setFields.degree}
          />
        </Field.Body>
        <Field.Body
          id="area"
          label="Area"
          description="In what area in your field are you in?"
          warning={validate(warnings, "area")}>
          <Field.Select.Combo
            options={areas}
            value={fields.area}
            setValue={setFields.area}
          />
        </Field.Body>
        <Field.Body
          id="from"
          label="From Year"
          description="In what year did you start to study this field?"
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
          description="In what year did you Graduate?"
          tooltip="All prices should start from 50 dollars."
          warning={validate(warnings, "to")}>
          <Field.Select.Combo
            options={years}
            value={fields.to}
            setValue={setFields.to}
          />
        </Field.Body>
      </div>
      <div className="flex w-full gap-4">
        <Button onClick={handleSubmit}>Add Education</Button>
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

export default Education;
