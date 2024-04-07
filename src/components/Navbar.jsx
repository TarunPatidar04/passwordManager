import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center px-4 h-14">
      <div className="logo font-bold">Passop</div>
      <ul>
        <li className="flex gap-4">
          <a className="hover:font-bold cursor-pointer" href="#">Home</a>
          <a className="hover:font-bold cursor-pointer" href="#">About</a>
          <a className="hover:font-bold cursor-pointer" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
