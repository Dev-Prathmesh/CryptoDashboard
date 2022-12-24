import React from "react";
const Navbar = () => {
    return (
      <nav className="flex sm:justify-left space-x-4 bg-white border-b-4 border-zinc-300">
        <img src={require('./images/logo.png')} alt="almabetter " className="object-contain md:object-scale-down" width="20%"/>
      </nav>
    );
  };
  
  export default Navbar;