import { MinusIcon } from "@heroicons/react/24/solid";
import Route from "./route";
import Search from "./search";
import User from "./user";

const categories = ["Typescript", "JavaScript", "Python"];

const Navbar = () => {
  return (
    <nav className="contain">
      <div className="mb-2 flex items-center gap-6 border-b pb-4">
        <strong className="text-2xl">Codery</strong>
        <Search />
        <ul className="flex gap-4">
          <Route to="Explore" href="#" />
          <Route to="About" href="#" />
        </ul>
        <MinusIcon className="icon -ml-2 -mr-4 rotate-90 text-primary-dark/fade" />
        <User />
      </div>
      <ul className="flex gap-6">
        {categories.map((category) => (
          <Route key={category} to={category} href="#" />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
