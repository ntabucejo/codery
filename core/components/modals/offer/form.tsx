"use client";

import { useState } from "react";
import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";
import { Gig, User } from "@prisma/client";
import validate from "@core/utilities/validate";
import { ZodIssue } from "zod";
import schemas from "@core/validations/schemas";
import Avatar from "@core/components/elements/avatar";

type Props = {
  modal: ModalType;
  client: User;
  gigs: Gig[];
};

const Form = ({ modal, client, gigs }: Props) => {
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const [fields, setFields] = useState({
    price: 0,
    revision: 0,
    deliveryDays: 0,
    description: "",
    gig: gigs[0],
  });

  const handleChange = (id: string, value: any) => {
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
  };

  const handleCreateOffer = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const result = schemas.offer.safeParse(fields);
    if (result.success) {
      try {
        const response = await fetch("/api/payment/create-offer", {
          method: "POST",
          body: JSON.stringify({
            title: fields.gig.title,
            userId: client.id,
            freelancerId: fields.gig.freelancerId,
            gigId: fields.gig.id,
            description: fields.description,
            price: +fields.price,
            revision: +fields.revision,
            deliveryDays: +fields.deliveryDays,
          }),
        });
        if (response.status === 200) {
          modal.handleClose();
          setFields({
            price: 0,
            revision: 0,
            deliveryDays: 0,
            description: "",
            gig: gigs[0],
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setWarnings(result.error.issues);
    }
  };

  return (
    <Modal
      title="Custom Offer: Details"
      description="State what are the details of your contract between you and your client."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        {/* client */}
        <section className="flex flex-col gap-3">
          <h1 className="font-bold">Client:</h1>
          <div className="flex items-center gap-3">
            <Avatar src={client.image!} alt="client" size="medium" />
            <div className="flex flex-col">
              <h2 className="font-bold">{client.name}</h2>
              <h2 className="text-sm">{client.email}</h2>
            </div>
          </div>
        </section>

        {/* choose gig */}
        <section className="flex h-64 flex-col gap-2 overflow-y-scroll pr-3">
          <h1 className="font-bold">Select Gig</h1>
          <p className="-mt-2 text-sm text-primary-dark/fade">
            You can only select one gig.
          </p>

          {gigs.map((gig) => (
            <div
              key={gig.id}
              className="flex w-full items-center justify-between rounded border px-4 py-2">
              <h3 className="text-sm font-semibold">{gig.title}</h3>
              <Button
                onClick={() => setFields({ ...fields, gig: gig })}
                className={`${
                  gig.id === fields.gig.id
                    ? "bg-primary-brand"
                    : "bg-primary-dark"
                }`}>
                {gig.id === fields.gig.id ? "Selected" : "Select Gig"}
              </Button>
            </div>
          ))}
        </section>

        <Field.Body
          id="price"
          label="Price"
          description="State the offer's price."
          warning={validate(warnings, "price")}>
          <Field.Number
            id="price"
            isFull
            value={fields.price}
            onChange={(event) => handleChange("price", +event.target.value)}
          />
        </Field.Body>

        <Field.Body
          id="revision"
          label="Revision"
          warning={validate(warnings, "revision")}
          description="State how many times of revision covered to your contract.">
          <Field.Number
            id="revision"
            isFull
            value={fields.revision}
            onChange={(event) => handleChange("revision", +event.target.value)}
          />
        </Field.Body>

        <Field.Body
          id="deliveryDays"
          label="Days of Delivery"
          warning={validate(warnings, "deliveryDays")}
          description="State how many days you can delivered the product to your client.">
          <Field.Number
            id="deliveryDays"
            isFull
            value={fields.deliveryDays}
            onChange={(event) =>
              handleChange("deliveryDays", +event.target.value)
            }
          />
        </Field.Body>

        <Field.Body
          id="description"
          label="Description"
          warning={validate(warnings, "description")}
          description="State all the details that's been discussed between you and your client.">
          <Field.Textarea
            id="description"
            isFull
            placeholder="Lorem Ipsum"
            value={fields.description}
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
          />
        </Field.Body>
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={handleCreateOffer}>Create Offer</Button>
        <Button variant="secondary" onClick={modal.handleClose}>
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

export default Form;
