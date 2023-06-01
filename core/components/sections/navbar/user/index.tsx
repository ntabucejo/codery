"use client";

import { ShoppingCartIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import Button from "@core/components/elements/button";
import Symbol from "../../../elements/symbol";
import Menu from "./menu";
import { MinusIcon } from "@heroicons/react/24/solid";
import type { Freelancer, User } from "@prisma/client";

type Props = {
  user: User & { freelancer: Freelancer | null };
};

const User = ({ user }: Props) => {
  return (
    <>
      <MinusIcon className="icon -ml-2 -mr-4 rotate-90 text-primary-dark/fade" />
      <div className="flex items-center gap-4">
        <Button variant="tertiary">
          <Symbol Icon={BanknotesIcon} />
          Offers
        </Button>
        <Menu user={user} />
      </div>
    </>
  );
};

export default User;
