import useSession from "@core/hooks/use-session";
import Route from "../../elements/route";
import Search from "./search";
import SignIn from "./sign-in";
import User from "./user";
import { getProviders } from "next-auth/react";

const categories = [
  "Typescript",
  "JavaScript",
  "Python",
  "C++",
  "Unity",
  "Artificial Intelligence",
  "Robotics",
  "Web Development",
  "Word Press",
  "Web Flow",
  "Application",
  "React Native",
  "NextJs",
  "Rust",
  "Svelte",
  "API Service",
  "Discord Bots",
];

const Navbar = async () => {
  const { session } = await useSession();
  const providers = await getProviders();

  return (
    <nav className="contain space-y-4">
      {/* Upper Nav */}
      <div className="flex items-center gap-4">
        <strong className="text-2xl">Codery</strong>
        <Search />
        <ul className="flex gap-4">
          <Route to="Home" href="#" isBold />
          <Route to="Explore" href="#" isBold />
          <Route to="About" href="#" isBold />
        </ul>
        {session ? (
          <User session={session} />
        ) : (
          <SignIn providers={providers!} />
        )}
      </div>
      {/* Lower Nav */}
      <ul className="flex gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <Route key={category} to={category} href="#" />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
