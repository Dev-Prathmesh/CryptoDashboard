import React from "react";
const Navbar = () => {
    return (
      <nav className="flex sm:justify-left space-x-4 bg-white border-b-4 border-zinc-300">
        <img src={require('./images/logo.png')} alt="almabetter " className="object-contain md:object-scale-down w-1/4 h-1/2 sm:w-30 md:w-40 lg:w-50"/>
      </nav>
    );
  };
  
  export default Navbar;