import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-full flex justify-between items-center px-12">
      <h1 className="font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700">
        Vega Sağlık
      </h1>
      <div className="flex items-center gap-x-5 text-sm">
        <Link className="pb-1 border border-transparent hover:border-b-black  transition-all duration-300 ">
          Hakkımızda
        </Link>
        <Link className="pb-1 border border-transparent hover:border-b-black  transition-all duration-300 ">
          Doktorlarımız
        </Link>
        <Link className="px-4 py-1 mb-1 font-semibold hover:from-blue-400 hover:to-sky-700 transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-sky-700 text-white">
          Randevu Al
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
