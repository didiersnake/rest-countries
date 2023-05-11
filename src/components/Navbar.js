import React from 'react'
import dark from "../images/moon.svg"

const Navbar = () => {
  return (
      <div className="w-full px-6 md:px-16 py-4 bg-slate-800 flex items-center justify-between text-white font-medium 
    shadow-md">
      <div>
        <p>Where in the world</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src={dark} alt="dark" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Navbar