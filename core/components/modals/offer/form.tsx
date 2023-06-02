"use client";

import { useState } from "react";
import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";
import { Freelancer, Gig, Thumbnail, User } from "@prisma/client";
import Image from "next/image";

type Props = {
  modal: ModalType;
  gig: Gig & {
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  };
};

const Form = ({ modal, gig }: Props) => {
  const [fields, setFields] = useState({
    client: "",
    price: 5,
    revision: 5,
    delivery: 5,
    description: "",
  });

  const handleChange = (id: string, value: any) => {
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
  };

  const handleCreateOffer = async () => {
    await fetch("/api/payment/create-offer", {
      method: "POST",
      body: JSON.stringify({
        title: "Test",
        userId: "cld4mfisa0000uifkho5eov3r",
        freelancerId: "cldbsc6390008sqs0cacdwsml",
        gigId: "cldci7mq90001sqv4q6xqs6qy",
        description: "Test",
        price: 2,
        revision: 3,
        deliveryDays: 1,
      }),
    });
  };

  return (
    <Modal
      title="Custom Offer: Details"
      description="State what are the details of your contract between you and your client."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        <Field.Body
          id="client"
          label="Client Full Name"
          description="State the client's full name.">
          <Field.Text
            id="client"
            isFull
            placeholder="Name"
            value={fields.client}
            onChange={(event) => handleChange("client", event.target.value)}
          />
        </Field.Body>

        <div className="my-2 flex items-center gap-5 border bg-slate-200 px-4">
          <div className="relative h-14 w-14">
            <Image
              src={gig.thumbnails[0].image}
              alt={gig.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Gig Order:</span>
            <h3 className="w-full whitespace-normal text-sm font-semibold">
              {gig.title}
            </h3>
          </div>
        </div>

        <Field.Body
          id="price"
          label="Price"
          description="State the offer's price.">
          <Field.Number
            id="price"
            isFull
            value={fields.price}
            onChange={(event) => handleChange("price", event.target.value)}
          />
        </Field.Body>

        <Field.Body
          id="revision"
          label="Revision"
          description="State how many times of revision covered to your contract.">
          <Field.Number
            id="revision"
            isFull
            value={fields.revision}
            onChange={(event) => handleChange("revision", event.target.value)}
          />
        </Field.Body>

        <Field.Body
          id="delivery"
          label="Days of Delivery"
          description="State how many days you can delivered the product to your client.">
          <Field.Number
            id="delivery"
            isFull
            value={fields.delivery}
            onChange={(event) => handleChange("delivery", event.target.value)}
          />
        </Field.Body>

        <Field.Body
          id="description"
          label="Description"
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
        <Button
          onClick={async () => {
            await handleCreateOffer();
            modal.handleClose;
          }}>
          Create Offer
        </Button>
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
