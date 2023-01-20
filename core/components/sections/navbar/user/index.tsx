"use client";

import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import { BellIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Symbol from "../../../elements/symbol";
import UserMenu from "./menu";

const User = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex">
        <Button variant="icon">
          <Symbol Icon={BellIcon} />
        </Button>
        <Button variant="icon">
          <Symbol Icon={ShoppingCartIcon} />
        </Button>
      </div>
      <UserMenu/>
    </div>
  );
};

export default User;
