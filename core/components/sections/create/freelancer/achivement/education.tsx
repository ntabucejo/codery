import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";
import {
  educationErrors,
  educationSchema,
  freelancerFields,
  type EducationErrors,
  type FreelancerFields,
} from "@core/validations/freelancer";
import cuid from "cuid";
import {
  MouseEvent,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type Props = {
  fields: FreelancerFields;
  setFields: Dispatch<SetStateAction<FreelancerFields>>;
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

for (let year = 1960; year <= 2022; year++) {
  years.unshift(new Year(cuid(), year.toString()));
}

let degrees: { id: string; name: string }[] = [
  new Degree(cuid(), "BSCS"),
  new Degree(cuid(), "BSIT"),
  new Degree(cuid(), "BSCE"),
];

let areas: { id: string; name: string }[] = [
  new Area(cuid(), "Software"),
  new Area(cuid(), "Hardware"),
];

const Education = ({ fields, setFields, modal }: Props) => {
  const [errors, setErrors] = useState<EducationErrors>(educationErrors);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clearErrors = () => setErrors(educationErrors);
    const result = educationSchema.safeParse(fields.education);
    if (result.success) {
      clearErrors();
      modal.handleClose();
      setFields({
        ...fields,
        educations: [...fields.educations, fields.education],
        education: freelancerFields.education,
      });
      return;
    }
    const validations = result.error.issues;
    const updatedErrors = validations.map((validation) => {
      return { name: validation.path[0], message: validation.message };
    });
    clearErrors();
    for (const error of updatedErrors) {
      setErrors((state) => ({ ...state, [error.name]: error.message }));
    }
  };

  const handleClear = () => {
    setFields({
      ...fields,
      education: freelancerFields.education,
    });
    setErrors(educationErrors);
  };

  return (
    <Modal
      title="Education"
      description="How much is your starting price? You can negotiate with your client about the final amount later."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-2xl">
      <Field.Body
        id="school"
        label="School"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.school}>
        <Field.Text
          id="school"
          isFull
          placeholder="Juan Jose University"
          value={fields.education.school}
          onChange={(event) =>
            setFields({
              ...fields,
              education: {
                ...fields.education,
                school: event.target.value,
              },
            })
          }
        />
      </Field.Body>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <Field.Body
          id="degree"
          label="Degree"
          description="How much is your starting price? "
          tooltip="All prices should start from 50 dollars."
          error={errors.degree}>
          <Field.Select.Combo
            options={degrees}
            keys={["education", "degree"]}
            value={fields.education.degree}
            setValue={setFields}
          />
        </Field.Body>
        <Field.Body
          id="area"
          label="Area"
          description="How much is your starting price? "
          tooltip="All prices should start from 50 dollars."
          error={errors.area}>
          <Field.Select.Combo
            options={areas}
            keys={["education", "area"]}
            value={fields.education.area}
            setValue={setFields}
          />
        </Field.Body>
        <Field.Body
          id="year"
          label="Year"
          description="How much is your starting price? "
          tooltip="All prices should start from 50 dollars."
          error={errors.year}>
          <Field.Select.Combo
            options={years}
            keys={["education", "year"]}
            value={fields.education.year}
            setValue={setFields}
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
