import React from 'react'
import dark from "../images/moon.svg"

const Navbar = () => {
  return (
    <div className="w-full px-6 md:px-16 py-4 bg-white dark:bg-[#2B3743] dark:text-white flex items-center justify-between font-medium border-b-2 border-b-gray-200 dark:border-b-gray-800">
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