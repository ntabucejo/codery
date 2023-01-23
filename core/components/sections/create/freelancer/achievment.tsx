import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import {
  freelancerFields,
  type FreelancerType,
} from "@core/schemas/freelancer";
import cuid from "cuid";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type Props = {
  fields: FreelancerType;
  setFields: Dispatch<SetStateAction<FreelancerType>>;
};

const options = [
  { id: cuid(), name: "Wade Cooper" },
  { id: cuid(), name: "Arlene Mccoy" },
  { id: cuid(), name: "Devon Webb" },
  { id: cuid(), name: "Tom Cook" },
  { id: cuid(), name: "Tanya Fox" },
  { id: cuid(), name: "Hellen Schmidt" },
];

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
  new Degree(cuid(), "Software"),
  new Degree(cuid(), "Hardware"),
];

const Achievement = ({ fields, setFields }: Props) => {
  const { state, handleOpen, handleClose } = useModal();
  const [education, setEducation] = useState(fields.education);

  useEffect(() => {
    setFields({
      ...fields,
      education: {
        ...fields.education,
        degree: education.degree,
        area: education.area,
        year: education.year,
      },
    });
  }, [education.degree, education.area, education.year]);

  return (
    <form className="space-y-4">
      <Field.Body
        id="education"
        label="Education"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars.">
        <Button onClick={handleOpen}>Add Education</Button>
        <ul className="grid grid-cols-4 gap-4">
          {fields.educations.map((education) => (
            <li className="space-y-4 rounded border bg-white p-4">
              <div>
                <h4 className="font-semibold">{education.school}</h4>
                <h5 className="text-xs text-primary-dark/fade">
                  {education.degree?.name}
                </h5>
              </div>
              <p className="text-sm text-primary-dark/fade">
                {education.area?.name}
              </p>
            </li>
          ))}
        </ul>
        <Modal
          title="Education"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          state={state}
          handleClose={handleClose}
          className="max-w-2xl">
          <Field.Body
            id="school"
            label="School"
            description="Where do you live?"
            tooltip="Any information needed here in the form are safe and private.">
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
              tooltip="All prices should start from 50 dollars.">
              <Field.Select.Combo
                options={degrees}
                name="degree"
                value={fields.education.degree}
                setValue={setEducation}
              />
            </Field.Body>
            <Field.Body
              id="area"
              label="Area"
              description="How much is your starting price? "
              tooltip="All prices should start from 50 dollars.">
              <Field.Select.Combo
                options={areas}
                name="area"
                value={fields.education.area}
                setValue={setEducation}
              />
            </Field.Body>
            <Field.Body
              id="year"
              label="Year"
              description="How much is your starting price? "
              tooltip="All prices should start from 50 dollars.">
              <Field.Select.Combo
                options={years}
                name="year"
                value={fields.education.year}
                setValue={setEducation}
              />
            </Field.Body>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                handleClose();
                setFields({
                  ...fields,
                  educations: [...fields.educations, { ...fields.education }],
                  education: freelancerFields.education,
                });
              }}>
              Add Education
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setFields({
                  ...fields,
                  education: freelancerFields.education,
                });
              }}>
              Clear
            </Button>
          </div>
        </Modal>
      </Field.Body>
    </form>
  );
};

export default Achievement;
