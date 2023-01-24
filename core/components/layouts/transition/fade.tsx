import { Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  children?: React.ReactNode;
  show?: boolean;
};

const Fade = ({ children, show }: Props) => {
  return (
    <Transition show={show} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        {children}
      </Transition.Child>
    </Transition>
  );
};

export default Fade;
