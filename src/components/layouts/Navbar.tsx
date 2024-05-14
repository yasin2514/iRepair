import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className=" h-16">
      <nav className="w-full max-w-[1230px] h-full mx-auto flex justify-between items-center px-5">
        <span className="text-3xl font-semibold">iRepair</span>
        <ul className="space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          {/* <NavLink to={"/"}>Services</NavLink> */}
          <Button>
            <NavLink to={"/"}>Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
