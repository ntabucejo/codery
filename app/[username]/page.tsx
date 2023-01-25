import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Route from "@core/components/elements/route";
import Gigs from "@core/components/sections/gigs";
import useUser from "@core/hooks/use-user";
import { MapPinIcon, AtSymbolIcon, UserIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Image from "next/image";

const Page = async () => {
  const user = await useUser();

  return (
    <>
      <section className="smooth relative -mt-4 aspect-[20/4] overflow-hidden">
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
            src={user?.image!}
            alt={user?.name!}
            size="large"
            className="-mt-20 rounded-full border"
          />
          <div className="flex flex-col justify-end space-y-2">
            <h1 className="text-5xl font-bold">{user?.name}</h1>
            <div className="flex gap-4">
              <Pin size="medium" Icon={AtSymbolIcon}>
                {user?.username}
              </Pin>
              {user?.location ? (
                <Pin size="medium" Icon={MapPinIcon}>
                  {user?.location}
                </Pin>
              ) : null}
              <Pin size="medium" Icon={UserIcon}>
                {moment(user?.createdAt!).format("LL")}
              </Pin>
            </div>
          </div>
        </div>
      </section>
      <section className="contain border-y py-2">
        <ul className="flex gap-6">
          <Route to="Gigs" href="#" />
          <Route to="About Me" href="#" />
          <Route to="Message Me" href="#" />
        </ul>
      </section>
      <Gigs />
    </>
  );
};

export default Page;
