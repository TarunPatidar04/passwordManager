import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/ &gt;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
