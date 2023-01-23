import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import {
  type FreelancerFields,
  type TestimonialErrors,
  testimonialErrors,
  testimonialSchema,
  freelancerFields,
} from "@core/validations/freelancer";
import { type Modal as ModalType } from "@core/types/modal";
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

const Testimonial = ({ fields, setFields, modal }: Props) => {
  const [errors, setErrors] = useState<TestimonialErrors>(testimonialErrors);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clearErrors = () => setErrors(testimonialErrors);
    const result = testimonialSchema.safeParse(fields.testimonial);
    if (result.success) {
      clearErrors();
      modal.handleClose();
      setFields({
        ...fields,
        testimonials: [...fields.testimonials, fields.testimonial],
        testimonial: freelancerFields.testimonial,
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
      title="Testimonial"
      description="How much is your starting price? You can negotiate with your client about the final amount later."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-2xl">
      <Field.Body
        id="name"
        label="Name"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.name}>
        <Field.Text
          id="name"
          isFull
          placeholder="Juan Jose"
          value={fields.testimonial.name}
          onChange={(event) =>
            setFields({
              ...fields,
              testimonial: {
                ...fields.testimonial,
                name: event.target.value,
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
          placeholder="Developer"
          value={fields.testimonial.position}
          onChange={(event) =>
            setFields({
              ...fields,
              testimonial: {
                ...fields.testimonial,
                position: event.target.value,
              },
            })
          }
        />
      </Field.Body>
      <div className="grid grid-cols-2 gap-8">
        <Field.Body
          id="email"
          label="Email"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private."
          error={errors.email}>
          <Field.Text
            id="email"
            isFull
            placeholder="juanjose@example.com"
            value={fields.testimonial.email}
            onChange={(event) =>
              setFields({
                ...fields,
                testimonial: {
                  ...fields.testimonial,
                  email: event.target.value,
                },
              })
            }
          />
        </Field.Body>
        <Field.Body
          id="link"
          label="Link"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private."
          error={errors.link}>
          <Field.Text
            id="link"
            isFull
            placeholder="www.juanjose.com"
            value={fields.testimonial.link}
            onChange={(event) =>
              setFields({
                ...fields,
                testimonial: {
                  ...fields.testimonial,
                  link: event.target.value,
                },
              })
            }
          />
        </Field.Body>
      </div>
      <Field.Body
        id="message"
        label="Message"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private."
        error={errors.message}>
        <Field.Textarea
          id="message"
          isFull
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum enim blanditiis nobis facilis modi ut. Libero temporibus ipsum, quisquam sapiente aliquid magnam nobis optio, dolorum ipsam reiciendis, consectetur provident."
          value={fields.testimonial.message}
          onChange={(event) =>
            setFields({
              ...fields,
              testimonial: {
                ...fields.testimonial,
                message: event.target.value,
              },
            })
          }
        />
      </Field.Body>
      <div className="flex w-full gap-4">
        <Button onClick={handleSubmit}>Add Testimonial</Button>
        <Button
          variant="secondary"
          onClick={() => {
            setFields({
              ...fields,
              testimonial: freelancerFields.testimonial,
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

export default Testimonial;
