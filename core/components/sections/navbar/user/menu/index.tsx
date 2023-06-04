"use client";

import Avatar from "@core/components/elements/avatar";
import { Menu as HeadlessuiMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Route from "./route";
import {
  UserIcon,
  ChartPieIcon,
  ArrowLeftOnRectangleIcon,
  BriefcaseIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "@core/components/elements/button";
import { signOut } from "next-auth/react";
import Symbol from "@core/components/elements/symbol";
import type { Freelancer, User } from "@prisma/client";
import useModal from "@core/hooks/use-modal";
import Modal from "@core/components/layouts/modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  user: User & {
    freelancer: Freelancer | null;
  };
  className?: string;
};

const Menu = ({ user, className }: Props) => {
  const becomeFreelancerModal = useModal("hide");
  const router = useRouter();

  return (
    <>
      <HeadlessuiMenu as="div" className={`${className} relative z-10`}>
        <HeadlessuiMenu.Button className="flex items-center">
          <Avatar src={user.image!} alt="Avatar" size="small" />
        </HeadlessuiMenu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <HeadlessuiMenu.Items className="fixed left-4 right-4 mt-4 w-80 rounded border bg-primary-light py-2 shadow book:absolute book:left-auto book:right-0">
            <div className="flex items-center gap-4 px-2 pb-2">
              <Avatar src={user.image!} alt="Avatar" size="medium" />
              <div className="flex flex-col">
                <span className="font-bold">{user.name!}</span>
                <span className="text-xs text-primary-dark/fade">
                  {user.email!}
                </span>
                {user.freelancer ? (
                  <span className="mt-1  w-fit rounded bg-primary-dark py-1 px-3 text-xs font-semibold text-white">
                    freelancer
                  </span>
                ) : null}
              </div>
            </div>

            <ul className="border-y p-2">
              <Route Icon={UserIcon} href={`/${user.username}/profile`}>
                Profile
              </Route>
              <Route Icon={ChartPieIcon} href="/">
                Dashboard
              </Route>
              {user.freelancer ? (
                <Route
                  Icon={PlusCircleIcon}
                  href={`/${user.username}/create/gig`}>
                  Create Gig
                </Route>
              ) : (
                <button
                  onClick={becomeFreelancerModal.handleOpen}
                  className="w-full">
                  <Route Icon={BriefcaseIcon} href="/">
                    Become Freelancer
                  </Route>
                </button>
              )}
            </ul>

            <Button
              isFull
              onClick={() => signOut()}
              className="mt-2 flex items-center gap-2">
              <Symbol
                Icon={ArrowLeftOnRectangleIcon}
                isHoverDisabled
                className="text-primary-light"
              />
              Logout Account
            </Button>
          </HeadlessuiMenu.Items>
        </Transition>
      </HeadlessuiMenu>

      <Modal
        title="Rules and Regulations: Becoming Freelancer"
        description="By Clicking Continue, this will prove that you agreed to our rules and regulations when becoming a freelancer."
        state={becomeFreelancerModal.state}
        handleClose={becomeFreelancerModal.handleClose}
        className="max-w-5xl">
        <div className="flex flex-col items-center gap-5">
          <div className="h-96 overflow-y-scroll">
            <p>
              Codery Rules and Regulations of Becoming Freelancer <br />
              <br />
              <span className="font-semibold">1. General Guidelines</span>{" "}
              <br />
              1.1 By using Codery as a freelancer, you agree to comply with
              these rules and regulations at all times. <br />
              1.2 Codery reserves the right to modify these rules and
              regulations without prior notice. It is your responsibility to
              stay updated on any changes. <br />
              1.3 Failure to adhere to these rules and regulations may result in
              the termination of your freelancer account. <br /> <br />
              <span className="font-semibold">
                2. Account Creation and Verification
              </span>{" "}
              <br />
              2.1 To join Codery as a freelancer, you must create an account and
              provide accurate and up-to-date information. <br />
              2.2 You agree to verify your identity and qualifications as
              requested by Codery to ensure the credibility and trustworthiness
              of your profile. <br />
              2.3 Only one account per individual is allowed on Codery. Creating
              multiple accounts or impersonating others is strictly prohibited.{" "}
              <br /> <br />
              <span className="font-semibold">
                3. Services and Offerings
              </span>{" "}
              <br />
              3.1 As a freelancer on Codery, you may offer your services in
              accordance with your skills and expertise. <br />
              3.2 You are responsible for accurately describing the services you
              offer, including pricing, delivery timeframes, and any additional
              terms or conditions. <br />
              3.3 You must deliver high-quality work that meets or exceeds the
              expectations of the client. <br />
              3.4 Any misrepresentation of your skills or services is strictly
              prohibited and may result in account suspension or termination.{" "}
              <br />
              <br />
              <span className="font-semibold">
                4. Communication and Professionalism{" "}
              </span>{" "}
              <br />
              4.1 You must maintain professional and respectful communication
              with clients, fellow freelancers, and Codery staff. <br />
              4.2 Any form of harassment, discrimination, or abusive behavior
              will not be tolerated. <br />
              4.3 You are responsible for responding to client inquiries in a
              timely manner, keeping them informed about the progress of the
              project, and meeting agreed-upon deadlines. <br />
              <br />
              <span className="font-semibold">
                5. Payments and Financial Matters
              </span>{" "}
              <br />
              5.1 All financial transactions on Codery will be conducted through
              the platform's designated payment system. <br />
              5.2 Codery will deduct a commission fee from the total payment
              received for services rendered, as specified in the platform's fee
              structure. <br />
              5.3 It is your responsibility to ensure accurate invoicing,
              payment collection, and reporting of income for tax purposes.{" "}
              <br />
              5.4 Any attempt to manipulate or defraud the payment system or
              engage in fraudulent activities will result in immediate account
              suspension and legal consequences. <br />
              <br />
              <span className="font-semibold">
                6. Intellectual Property and Confidentiality
              </span>{" "}
              <br />
              6.1 You retain the intellectual property rights to the work you
              create, unless otherwise agreed upon with the client. <br />
              6.2 You must respect and protect the confidentiality of any
              sensitive information shared by the client during the course of a
              project. <br />
              6.3 Unauthorized use, reproduction, or distribution of copyrighted
              material is strictly prohibited. <br />
              <br />
              <span className="font-semibold">7. Dispute Resolution</span>{" "}
              <br />
              7.1 In the event of a dispute between you and a client, Codery
              encourages you to resolve the matter professionally and amicably.{" "}
              <br />
              7.2 If a resolution cannot be reached, Codery may step in as a
              mediator to help facilitate a fair resolution. <br />
              7.3 Codery's decision in dispute resolution cases will be final
              and binding. <br />
              <br />
              <span className="font-semibold">
                8. Termination of Account
              </span>{" "}
              <br />
              8.1 Codery reserves the right to suspend or terminate your account
              if you violate any of the rules and regulations outlined herein.{" "}
              <br />
              8.2 Upon account termination, you will lose access to all features
              and services provided by Codery. <br />
              Please note that the above rules and regulations are provided as a
              sample and may need to be customized or adapted to suit the
              specific needs of your freelancing platform, Codery.
            </p>
          </div>
          <Button
            onClick={() => {
              router.push(`/${user.username}/create/freelancer`);
              becomeFreelancerModal.handleClose();
            }}>
            I agree and Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Menu;
