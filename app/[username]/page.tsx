import Avatar from "@core/components/elements/avatar";
import Pin from "@core/components/elements/pin";
import Route from "@core/components/elements/route";
import Gigs from "@core/components/sections/gigs";
import Hero from "@core/components/sections/hero";
import useFreelancer from "@core/hooks/use-freelancer";
import useGigs from "@core/hooks/use-gigs";
import useUser from "@core/hooks/use-user";
import { MapPinIcon, AtSymbolIcon, UserIcon } from "@heroicons/react/24/solid";
import moment from "moment";

type Props = {
  params: {
    username: string;
  };
};

const Page = async ({ params }: Props) => {
  const user = await useUser(params.username);
  const freelancer = await useFreelancer();
  const gigs = await useGigs(params.username);

  return (
    <>
      <Hero image="https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <section className="contain">
        <div className="ml-4 flex gap-8">
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
      {freelancer ? <Gigs data={gigs} /> : null}
    </>
  );
};

export default Page;
