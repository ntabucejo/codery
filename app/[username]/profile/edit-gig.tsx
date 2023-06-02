import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import type { Modal as ModalType } from "@core/types/modal";
import { Gig } from "@prisma/client";
import { useState } from "react";

type Props = {
  gig: Gig;
  modal: ModalType;
};

const EditGig = ({ gig, modal }: Props) => {
  const initialFields = {
    title: gig.title,
    description: gig.description,
    from: gig.from,
    to: gig.to,
    period: gig.period,
  };

  const [fields, setFields] = useState(initialFields);

  return (
    <Modal
      title="Edit Gig: Details"
      description="You can edit your gig information here."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        <Field.Body id="title" label="Title" description="State your Gig Title">
          <Field.Text
            id="client"
            isFull
            defaultValue={fields.title}
            onChange={(event) =>
              setFields({ ...fields, title: event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="description"
          label="Description"
          description="State your Gig Description">
          <Field.Textarea
            id="description"
            isFull
            value={fields.description}
            onChange={(event) =>
              setFields({ ...fields, description: event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="from"
          label="From"
          description="State your Starting Price">
          <Field.Number
            id="from"
            isFull
            value={fields.from}
            onChange={(event) =>
              setFields({ ...fields, from: +event.target.value })
            }
          />
        </Field.Body>

        <Field.Body id="to" label="to" description="State your Maximum Price">
          <Field.Number
            id="to"
            isFull
            value={fields.to}
            onChange={(event) =>
              setFields({ ...fields, to: +event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="revision"
          label="Revision"
          description="State your Days of Revision">
          <Field.Number
            id="period"
            isFull
            value={fields.period}
            onChange={(event) =>
              setFields({ ...fields, period: +event.target.value })
            }
          />
        </Field.Body>
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={modal.handleClose}>Save Changes</Button>
        <Button variant="secondary" onClick={() => setFields(initialFields)}>
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

export default EditGig;
