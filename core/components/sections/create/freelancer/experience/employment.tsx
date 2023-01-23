import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import {
  freelancerFields,
  type FreelancerType,
} from "@core/schemas/freelancer";
import { type State } from "@core/types/modal";
import cuid from "cuid";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type Props = {
  fields: FreelancerType;
  setFields: Dispatch<SetStateAction<FreelancerType>>;
  modalState: State;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
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

for (let year = 1960; year <= 2022; year++) {
  years.unshift(new Year(cuid(), year.toString()));
}

const Employment = ({
  fields,
  setFields,
  modalState,
  handleOpenModal,
  handleCloseModal,
}: Props) => {
  const [employment, setEmployment] = useState(fields.employment);

  useEffect(() => {
    setFields({
      ...fields,
      employment: { ...fields.employment, year: employment.year },
    });
  }, [employment.year]);

  return (
    <Field.Body
      id="employment"
      label="Emplyment"
      description="How much is your starting price? You can negotiate with your client about the final amount later."
      tooltip="All prices should start from 50 dollars.">
      <Button onClick={handleOpenModal}>Add Emplyment</Button>
      <ul className="grid grid-cols-4 gap-4">
        {fields.testimonials.map((testimonial) => (
          <li className="space-y-4 rounded border bg-white p-4">
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <h5 className="text-xs text-primary-dark/fade">
                {testimonial.email}
              </h5>
            </div>
            <p className="text-sm text-primary-dark/fade">
              {testimonial.message}
            </p>
          </li>
        ))}
      </ul>
      <Modal
        title="Employment"
        state={modalState}
        handleClose={handleCloseModal}
        className="max-w-2xl">
        <Field.Body
          id="position"
          label="Position"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private.">
          <Field.Text
            id="position"
            isFull
            placeholder="Software Developer"
            value={fields.employment.position}
            onChange={(event) =>
              setFields({
                ...fields,
                employment: {
                  ...fields.employment,
                  position: event.target.value,
                },
              })
            }
          />
        </Field.Body>
        <Field.Body
          id="description"
          label="Description"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private.">
          <Field.Textarea
            id="description"
            isFull
            placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum enim blanditiis nobis facilis modi ut. Libero temporibus ipsum, quisquam sapiente aliquid magnam nobis optio, dolorum ipsam reiciendis, consectetur provident."
            value={fields.employment.description}
            onChange={(event) =>
              setFields({
                ...fields,
                employment: {
                  ...fields.employment,
                  description: event.target.value,
                },
              })
            }
          />
        </Field.Body>
        <div className="grid grid-cols-2 gap-8">
          <Field.Body
            id="location"
            label="Location"
            description="Where do you live?"
            tooltip="Any information needed here in the form are safe and private.">
            <Field.Text
              id="location"
              isFull
              placeholder="Philippines"
              value={fields.employment.location}
              onChange={(event) =>
                setFields({
                  ...fields,
                  employment: {
                    ...fields.employment,
                    location: event.target.value,
                  },
                })
              }
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
              value={fields.employment.year}
              setValue={setEmployment}
            />
          </Field.Body>
        </div>
        <Field.Body
          id="active"
          label="Active"
          description="How much is your starting price? "
          tooltip="All prices should start from 50 dollars.">
          <Field.Check
            id="active"
            isChecked={fields.employment.isActive}
            onChange={(event) =>
              setFields({
                ...fields,
                employment: {
                  ...fields.employment,
                  isActive: event.target.checked,
                },
              })
            }>
            Still Active?
          </Field.Check>
        </Field.Body>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              handleCloseModal();
              setFields({
                ...fields,
                employments: [...fields.employments, { ...fields.employment }],
                employment: freelancerFields.employment,
              });
            }}>
            Add Employment
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFields({
                ...fields,
                employment: freelancerFields.employment,
              });
            }}>
            Clear
          </Button>
        </div>
      </Modal>
    </Field.Body>
  );
};

export default Employment;
