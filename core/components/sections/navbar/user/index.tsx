"use client";

import { BanknotesIcon } from "@heroicons/react/24/outline";
import Symbol from "../../../elements/symbol";
import Menu from "./menu";
import { BellIcon, MinusIcon } from "@heroicons/react/24/solid";
import type { Freelancer, User } from "@prisma/client";
import { Popover } from "@headlessui/react";
import Transition from "@core/components/layouts/transition";
import Button from "@core/components/elements/button";
import useModal from "@core/hooks/use-modal";
import Modal from "@core/components/layouts/modal";
import Field from "@core/components/elements/field";

type Props = {
  user: User & { freelancer: Freelancer | null };
};

const User = ({ user }: Props) => {
  const openOfferDetails = useModal();

  return (
    <>
      <MinusIcon className="icon -ml-2 -mr-4 rotate-90 text-primary-dark/fade" />

      <div className="flex items-center gap-4">
        <Popover className="relative">
          <Popover.Button className="group flex items-center gap-2 p-2 text-sm font-semibold text-primary-dark/fade outline-none hover:text-primary-dark">
            <Symbol
              Icon={BanknotesIcon}
              className="text-primary-dark/fade group-hover:text-primary-dark"
            />
            Offers
          </Popover.Button>

          <Transition.PopDown>
            <Popover.Panel className="absolute top-10 right-0 z-50 grid h-[400px] w-96 grid-rows-[auto,1fr,auto] overflow-y-scroll rounded border bg-white shadow-xl">
              <div className="flex items-center gap-2 border-b p-3 text-sm font-semibold">
                <Symbol Icon={BellIcon} size="small" />
                <h4>Offers</h4>
              </div>

              <section className="flex flex-col">
                <div className="smooth  z-50 flex w-full cursor-pointer items-center justify-between rounded p-3 hover:bg-slate-100">
                  <h1 className="font-semibold">
                    You received a special Offer from Nikko Abucejo
                  </h1>
                  <Button onClick={openOfferDetails.handleOpen}>
                    See Details
                  </Button>
                </div>
              </section>
            </Popover.Panel>
          </Transition.PopDown>
        </Popover>

        <Menu user={user} />
      </div>

      <Modal
        title="Custom Offer: Details"
        description="State what are the details of your contract between you and your client."
        state={openOfferDetails.state}
        handleClose={openOfferDetails.handleClose}
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
              value="David Robertson"
              isDisabled
            />
          </Field.Body>

          <Field.Body id="price" label="Price">
            <Field.Number id="client" isFull value={350} isDisabled />
          </Field.Body>

          <Field.Body id="revision" label="Revision">
            <Field.Number id="revision" isFull value={5} isDisabled />
          </Field.Body>

          <Field.Body id="delivery" label="Days of Delivery">
            <Field.Number id="delivery" isFull value={5} isDisabled />
          </Field.Body>

          <Field.Body id="client" label="Description">
            <Field.Textarea
              id="description"
              isFull
              value="I will do the client's frontend website using the latest technologies such as ReactJS, NextJS, TailwindCSS and typeScript. I will not do the design and just a development. "
              isDisabled
            />
          </Field.Body>
        </div>

        <div className="flex w-full gap-4">
          <Button>Accept Offer</Button>
          <Button variant="secondary" onClick={openOfferDetails.handleClose}>
            Decline Offer
          </Button>
          <Button
            variant="tertiary"
            onClick={openOfferDetails.handleClose}
            className="ml-auto">
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default User;
