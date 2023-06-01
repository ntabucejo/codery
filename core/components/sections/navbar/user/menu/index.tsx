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
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Button from "@core/components/elements/button";
import { signOut } from "next-auth/react";
import Symbol from "@core/components/elements/symbol";
import type { Freelancer, User } from "@prisma/client";

type Props = {
  user: User & {
    freelancer: Freelancer | null;
  };
  className?: string;
};

const Menu = ({ user, className }: Props) => {
  return (
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
            </div>
          </div>

          <ul className="border-y p-2">
            <Route Icon={UserIcon} href={`/${user.username}/profile`}>
              Profile
            </Route>
            <Route Icon={ChartPieIcon} href="/">
              Dashboard
            </Route>
            <Route Icon={ChartBarIcon} href="#">
              Report Statistics
            </Route>
            <Route Icon={PlusCircleIcon} href={`/${user.username}/create/gig`}>
              Create Gig
            </Route>
            <Route
              Icon={BriefcaseIcon}
              href={`/${user.username}/create/freelancer`}>
              Become Freelancer
            </Route>
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
  );
};

export default Menu;
