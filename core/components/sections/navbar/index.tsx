import { MinusIcon } from "@heroicons/react/24/solid";
import Route from "./route";
import Search from "./search";
import User from "./user";

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
];

const Navbar = () => {
  return (
    <nav className="contain pt-4">
      {/* Upper Nav */}
      <div className="flex items-center gap-4">
        <strong className="text-2xl">Codery</strong>
        <Search />
        <ul className="flex gap-4">
          <Route to="Home" href="#" isBold />
          <Route to="Explore" href="#" isBold />
          <Route to="About" href="#" isBold />
        </ul>
        <MinusIcon className="icon -ml-2 -mr-4 rotate-90 text-primary-dark/fade" />
        <User />
      </div>
      {/* Lower Nav */}
      <ul className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
        {categories.map((category) => (
          <Route key={category} to={category} href="#" />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
