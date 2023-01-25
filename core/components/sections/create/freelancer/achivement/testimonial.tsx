import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";
import { useState, type MouseEvent } from "react";
import stores from "@core/stores";
import schemas from "@core/validations/schemas";
import { ZodIssue } from "zod";
import validate from "@core/utilities/validate";

type Props = {
  modal: ModalType;
};

const Testimonial = ({ modal }: Props) => {
  const fields = stores.freelancer.testimonial((state) => state.fields);
  const setFields = stores.freelancer.testimonial((state) => state.setFields);
  const { testimonials: setTestimonials } = stores.freelancer.base(
    (state) => state.setFields
  );
  const clear = stores.freelancer.testimonial((state) => state.clear);
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = schemas.freelancer.testimonial.safeParse(fields);
    if (result.success) {
      setTestimonials(fields);
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
      title="Testimonial"
      description="Share us all the testimonials you receive. This will take an advantage to the client's."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <Field.Body
        id="name"
        label="Name"
        description="Tell us the testimonial's name."
        warning={validate(warnings, "name")}>
        <Field.Text
          id="name"
          isFull
          placeholder="Juan Jose"
          value={fields.name}
          onChange={setFields.name}
        />
      </Field.Body>
      <div className="grid grid-cols-2 gap-8">
        <Field.Body
          id="position"
          label="Position"
          description="Tell us the testimonial's position."
          warning={validate(warnings, "position")}>
          <Field.Text
            id="position"
            isFull
            placeholder="Developer"
            value={fields.position}
            onChange={setFields.position}
          />
        </Field.Body>
        <Field.Body
          id="email"
          label="Email Address"
          description="Tell us the testimonial's email address."
          warning={validate(warnings, "email")}>
          <Field.Text
            id="email"
            isFull
            placeholder="juanjose@example.com"
            value={fields.email}
            onChange={setFields.email}
          />
        </Field.Body>
      </div>
      <Field.Body
        id="message"
        label="Message"
        description="Share us their testimonial about you."
        warning={validate(warnings, "message")}>
        <Field.Textarea
          id="message"
          isFull
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum enim blanditiis nobis facilis modi ut. Libero temporibus ipsum, quisquam sapiente aliquid magnam nobis optio, dolorum ipsam reiciendis, consectetur provident."
          value={fields.message}
          onChange={setFields.message}
        />
      </Field.Body>
      <div className="flex w-full gap-4">
        <Button onClick={handleSubmit}>Add Testimonial</Button>
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

export default Testimonial;
