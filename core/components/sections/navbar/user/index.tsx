"use client";

import { BanknotesIcon } from "@heroicons/react/24/outline";
import Symbol from "../../../elements/symbol";
import Menu from "./menu";
import { BellIcon, MinusIcon } from "@heroicons/react/24/solid";
import type { Freelancer, Gig, Offer, User } from "@prisma/client";
import { Popover } from "@headlessui/react";
import Transition from "@core/components/layouts/transition";
import Button from "@core/components/elements/button";
import useModal from "@core/hooks/use-modal";
import Modal from "@core/components/layouts/modal";
import Field from "@core/components/elements/field";
import PaymentModal from "@core/components/modals/payment";
import { useState } from "react";
import RecievedOfferDetailsModal from "@core/components/modals/offer/recieved-offer-details";

type Props = {
  user: User & { freelancer: Freelancer | null };
  offers: (Offer & {
    freelancer: Freelancer & {
      user: User;
    };
    gig: Gig;
  })[];
};

const User = ({ user, offers }: Props) => {
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
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
                {offers.map((offer) => (
                  <>
                    <div
                      key={offer.id}
                      className="smooth  z-50 flex w-full cursor-pointer items-center justify-between rounded p-3 hover:bg-slate-100">
                      <h1 className="font-semibold">
                        You received an Offer from {offer.freelancer.user.name}
                      </h1>
                      <Button
                        onClick={() => {
                          setSelectedOffer(offer);
                          openOfferDetails.handleOpen();
                        }}>
                        See Details
                      </Button>
                    </div>
                  </>
                ))}
              </section>
            </Popover.Panel>
          </Transition.PopDown>
        </Popover>

        <Menu user={user} />
      </div>

      <RecievedOfferDetailsModal
        offer={selectedOffer}
        modal={openOfferDetails}
        user={user}
      />
    </>
  );
};

export default User;
