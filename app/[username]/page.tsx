import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Gigs from "@core/components/sections/gigs";
import { MapPinIcon, AtSymbolIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="smooth relative aspect-[20/4] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </section>
      <section className="contain">
        <div className="flex gap-8">
          <Avatar
            src="https://images.unsplash.com/photo-1672860647219-d624a4bf5d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Avatar"
            size="large"
            className="-mt-20 rounded-full border"
          />
          <div className="flex flex-col justify-end space-y-2">
            <h1 className="text-5xl font-bold">Nikko Abucejo</h1>
            <div className="flex gap-4">
              <Pin size="medium" Icon={AtSymbolIcon}>
                nikkoabucejo
              </Pin>
              <Pin size="medium" Icon={MapPinIcon}>
                Philippines
              </Pin>
              <Pin size="medium" Icon={UserIcon}>
                January 2022
              </Pin>
            </div>
          </div>
        </div>
      </section>
      <Gigs />
    </>
  );
};

export default Page;
