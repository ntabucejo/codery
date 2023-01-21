"use client";

import {
  BellIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Button from "@core/components/elements/button";
import { Session } from "next-auth";
import Symbol from "../../../elements/symbol";
import Menu from "./menu";
import { MinusIcon } from "@heroicons/react/24/solid";

type Props = {
  session: Session;
};

const User = ({ session }: Props) => {
  return (
    <>
      <MinusIcon className="icon -ml-2 -mr-4 rotate-90 text-primary-dark/fade" />
      <div className="flex items-center gap-4">
        <div className="flex">
          <Button variant="tertiary">
            <Symbol Icon={BellIcon} />
            Notifications
          </Button>
          <Button variant="tertiary">
            <Symbol Icon={ShoppingCartIcon} />
            Orders
          </Button>
          <Button variant="tertiary">
            <Symbol Icon={BanknotesIcon} />
            Offers
          </Button>
          <Button variant="tertiary">
            <Symbol Icon={ChatBubbleLeftRightIcon} />
            Messages
          </Button>
        </div>
        <Menu session={session} />
      </div>
    </>
  );
};

export default User;
