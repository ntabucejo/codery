import Button from "@core/components/elements/button";
import { BellIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Symbol from "../../../elements/symbol";
import Avatar from "./avatar";

const User = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex gap-2">
        <Button variant="icon">
          <Symbol Icon={BellIcon} />
        </Button>
        <Button variant="icon">
          <Symbol Icon={ShoppingCartIcon} />
        </Button>
      </div>

      <Avatar />
    </div>
  );
};

export default User;
