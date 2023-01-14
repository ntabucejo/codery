import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import { BellIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Symbol from "../../../elements/symbol";

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

      <Avatar
        src="https://images.unsplash.com/photo-1672860647219-d624a4bf5d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Avatar"
        size="small"
      />
    </div>
  );
};

export default User;
