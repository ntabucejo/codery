import { MinusIcon } from "@heroicons/react/24/solid";
import Route from "./route";
import Search from "./search";
import User from "./user";

const Navbar = () => {
  return (
    <nav className="contain flex items-center gap-6">
      <strong className="text-2xl">Codery</strong>
      <Search />
      <ul className="flex gap-4">
        <Route to="Explore" href="#" />
        <Route to="About" href="#" />
      </ul>
      <MinusIcon className="icon -ml-2 -mr-4 rotate-90 text-primary-dark/fade" />
      <User />
    </nav>
  );
};

export default Navbar;
