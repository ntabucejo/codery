import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import {
  freelancerFields,
  type FreelancerType,
} from "@core/schemas/freelancer";
import { type State } from "@core/types/modal";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
  fields: FreelancerType;
  setFields: Dispatch<SetStateAction<FreelancerType>>;
  modalState: State;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const Testimonial = ({
  fields,
  setFields,
  modalState,
  handleOpenModal,
  handleCloseModal,
}: Props) => {
  return (
    <Field.Body
      id="testimonial"
      label="Testimonial"
      description="How much is your starting price? You can negotiate with your client about the final amount later."
      tooltip="All prices should start from 50 dollars.">
      <Button onClick={handleOpenModal}>Add Testimonial</Button>
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
        title="Testimonial"
        state={modalState}
        handleClose={handleCloseModal}
        className="max-w-2xl">
        <Field.Body
          id="name"
          label="Name"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private.">
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
          tooltip="Any information needed here in the form are safe and private.">
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
            tooltip="Any information needed here in the form are safe and private.">
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
            tooltip="Any information needed here in the form are safe and private.">
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
          tooltip="Any information needed here in the form are safe and private.">
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
        <div className="flex gap-4">
          <Button
            onClick={() => {
              handleCloseModal();
              setFields({
                ...fields,
                testimonials: [
                  ...fields.testimonials,
                  { ...fields.testimonial },
                ],
                testimonial: freelancerFields.testimonial,
              });
            }}>
            Add Testimonial
          </Button>
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
        </div>
      </Modal>
    </Field.Body>
  );
};

export default Testimonial;
