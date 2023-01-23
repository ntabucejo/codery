import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import {
  EmploymentErrors,
  employmentErrors,
  employmentSchema,
  freelancerFields,
  type FreelancerFields,
} from "@core/validations/freelancer";
import { type Modal as ModalType } from "@core/types/modal";
import cuid from "cuid";
import {
  type MouseEvent,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

type Props = {
  fields: FreelancerFields;
  setFields: Dispatch<SetStateAction<FreelancerFields>>;
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

for (let year = 1960; year <= 2022; year++) {
  years.unshift(new Year(cuid(), year.toString()));
}

const Employment = ({ fields, setFields, modal }: Props) => {
  const [errors, setErrors] = useState<EmploymentErrors>(employmentErrors);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clearErrors = () => setErrors(employmentErrors);
    const result = employmentSchema.safeParse(fields.employment);
    if (result.success) {
      clearErrors();
      modal.handleClose();
      setFields({
        ...fields,
        employments: [...fields.employments, fields.employment],
        employment: freelancerFields.employment,
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

  return (
    <Modal
      title="Employment"
      description="How much is your starting price? You can negotiate with your client about the final amount later."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-2xl">
      <Field.Body
        id="company"
        label="Company"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.company}>
        <Field.Text
          id="position"
          isFull
          placeholder="Software Developer"
          value={fields.employment.company}
          onChange={(event) =>
            setFields({
              ...fields,
              employment: {
                ...fields.employment,
                company: event.target.value,
              },
            })
          }
        />
      </Field.Body>
      <Field.Body
        id="position"
        label="Position"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.position}>
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
        tooltip="Any information needed here in the form are safe and private."
        error={errors.description}>
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
          tooltip="Any information needed here in the form are safe and private."
          error={errors.location}>
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
          tooltip="All prices should start from 50 dollars."
          error={errors.year}>
          <Field.Select.Combo
            options={years}
            keys={["employment", "year"]}
            value={fields.employment.year}
            setValue={setFields}
          />
        </Field.Body>
      </div>
      <Field.Body
        id="active"
        label="Active"
        description="How much is your starting price? "
        tooltip="All prices should start from 50 dollars."
        error={errors.isActive}>
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
      <div className="flex w-full gap-4">
        <Button onClick={handleSubmit}>Add Employment</Button>
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
