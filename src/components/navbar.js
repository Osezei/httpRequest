import React from "react";
import { FaGlassCheers } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container font-semibold md:text-2xl lg:text-4xl p-1 my-4 flex justify-between text-align">
      <h3>
        Che<span className="opacity-50">ers</span>
      </h3>
      <FaGlassCheers />
    </nav>
  );
};

export default Navbar;
