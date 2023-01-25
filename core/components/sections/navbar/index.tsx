import Route from "../../elements/route";
import Search from "./search";
import SignIn from "./sign-in";
import User from "./user";
import { getProviders } from "next-auth/react";
import useUser from "@core/hooks/use-user";
import serialize from "@core/utilities/serialize";
import prisma from "@core/libraries/prisma";

const Navbar = async () => {
  const user = await useUser();
  const categories = await prisma.category.findMany();
  const providers = await getProviders();

  return (
    <nav className="contain space-y-4">
      {/* Upper Nav */}
      <div className="flex items-center gap-4">
        <strong className="text-2xl">Codery</strong>
        <Search />
        <ul className="flex gap-4">
          <Route to="Home" href="/" isBold />
          <Route to="Explore" href="#" isBold />
          <Route to="About" href="#" isBold />
        </ul>
        {user ? (
          <User user={serialize(user)} />
        ) : (
          <SignIn providers={providers!} />
        )}
      </div>
      {/* Lower Nav */}
      <ul className="flex gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <Route key={category.id} to={category.name} href="#" />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
