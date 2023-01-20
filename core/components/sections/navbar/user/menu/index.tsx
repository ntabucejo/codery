import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import { Menu } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

const UserMenu = () => {
  const list = [
    { Icon: <UserIcon className="h-6 w-6" />, name: "Profile", href: "#" },
    {
      Icon: <ChartBarIcon className="h-6 w-6" />,
      name: "Dashboard",
      href: "#",
    },
  ];

  return (
    <Menu as="div">
      <Menu.Button className="relative outline-none">
        <Avatar
          src="https://images.unsplash.com/photo-1672860647219-d624a4bf5d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Avatar"
          size="small"
        />
      </Menu.Button>
      <Menu.Items className="absolute right-2 z-50 flex flex-col rounded bg-white p-4 shadow-md outline-none desktop:right-10">
        <Menu.Item>
          <div className="mb-2 flex items-center gap-4">
            <Avatar
              src="https://images.unsplash.com/photo-1672860647219-d624a4bf5d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Avatar"
              size="medium"
            />
            <div className="flex flex-col">
              <span className="font-semibold">Jazztine Cruz</span>
              <span className="text-sm">jzztn.crz@gmail.com</span>
            </div>
          </div>
        </Menu.Item>

        {list.map((menu) => (
          <Menu.Item key={menu.name}>
            {({ active }) => (
              <a
                className={`${
                  active && "rounded bg-slate-100"
                } flex items-center gap-4 p-2`}
                href={menu.href}>
                {menu.Icon}
                {menu.name}
              </a>
            )}
          </Menu.Item>
        ))}

        <Button
          isFull
          onClick={() => signOut()}
          className="mt-2 flex items-center gap-2">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span>Logout my Account</span>
        </Button>
      </Menu.Items>
    </Menu>
  );
};

export default UserMenu;
