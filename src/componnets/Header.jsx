import React, { useState } from "react";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex px-2 items-center h-24 justify-between">
      <div>
        <img className="w-40 md:w-auto" src="/Logo.png" alt="Akkaas Logo" />
      </div>
      <div className="relative">
        <img
          className="w-6 sm:w-8 cursor-pointer"
          src="/Dropdown.png"
          alt="Dropdown"
          onClick={toggleDropdown}
        />
        {isDropdownVisible && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <a href="#profile" className="block px-4 py-2 text-black hover:bg-gray-200">
              Profile
            </a>
            <a href="#settings" className="block px-4 py-2 text-black hover:bg-gray-200">
              Settings
            </a>
            <a href="#logout" className="block px-4 py-2 text-black hover:bg-gray-200">
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
