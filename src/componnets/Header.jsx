import React, { useState } from "react";
import { Link } from 'react-dom'

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header>
<div className="flex px-2 items-center h-24 justify-between container mx-auto">
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
            <Link to="#profile" className="block px-4 py-2 text-black hover:bg-gray-200">
              Profile
            </Link>
            <Link to="#settings" className="block px-4 py-2 text-black hover:bg-gray-200">
              Settings
            </Link>
            <Link to="#logout" className="block px-4 py-2 text-black hover:bg-gray-200">
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
    </header>
    
  );
};

export default Header;
