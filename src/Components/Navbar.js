import React from "react";
const Navbar = () => {
    return (
      <nav className="flex sm:justify-left space-x-4 bg-white pb-6 border-b-4 min-w-max border-zinc-300">
        <img src={require('./images/logo.png')} alt="almabetter " className="object-contain h-30 pl-6 w-1/4 h-1/2 sm:w-30 md:w-40 lg:w-50" id="logo"/>
      </nav>
    );
  };
  
  export default Navbar;