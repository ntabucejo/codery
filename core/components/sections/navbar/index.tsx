import Search from "./search";
import User from "./user";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6">
      <strong className="text-2xl">Codery</strong>
      <Search />
      <User />
    </nav>
  );
};

export default Navbar;
