import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="container mx-auto w-11/12">
      <nav className="flex justify-between items-center py-4">
        {/* Left section Logo and Nav links */}
        <div className="flex items-center gap-10">
          <img src={logo} alt="logo" className="w-[80px]" />

          <div className="hidden md:flex gap-6">
            <a
              href="#"
              className="text-gray-600 font-bold opacity-70  hover:text-gray-900 hover:opacity-100 hover:font-semibold"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 font-bold opacity-70  hover:text-gray-900 hover:opacity-100 hover:font-semibold"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 font-bold opacity-70  hover:text-gray-900 hover:opacity-100 hover:font-semibold"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Right section with both Authentication buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 ">
            <button className="text-gray-600 cursor-pointer opacity-70 font-bold hover:text-gray-900">
              Login
            </button>
            <button className="bg-[hsl(180,66%,49%)] cursor-pointer opacity-70 font-bold text-white px-4 py-2 rounded-full hover:bg-[hsl(180,66%,49%)] hover:opacity-40">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button (visible on small screens) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (shown when menu is true) */}
      {menu && (
        <div className="md:hidden bg-[hsl(257,27%,26%)] p-4 rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-5 my-5">
            <a href="#" className="text-white font-bold">
              Features
            </a>
            <a href="#" className="text-white font-bold ">
              Pricing
            </a>
            <a href="#" className="text-white font-bold">
              Resources
            </a>
          </div>
          <hr className="my-5 text-white" />
          <div className="flex flex-col items-center gap-5 my-5">
            <button className="text-white font-bold w-full">
              Sign In
            </button>
            <button className="bg-[hsl(180,66%,49%)] text-white px-4 font-bold py-2 rounded-full hover:bg-[hsl(180,66%,49%)] w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
