import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import logoImage from "../../../images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-white sticky top-0 z-50">
      <div className="flex items-center cursor-pointer">
        <img className="h-8 w-full mx-2 object-cover" src={logoImage} alt="" />
        <h2 className="text-3xl font-black text-red-700">HUMMER</h2>
      </div>
      <nav className="flex justify-center p-4">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/inventory">Inventory</CustomLink>
        <CustomLink to="/signin">
          <FaUserPlus className="mr-2 text-xl" />
          SignIn
        </CustomLink>
        <CustomLink to="/signup">
          <FaSignInAlt className="mr-2 text-xl" />
          SignUp
        </CustomLink>
      </nav>
    </div>
  );
};

export default Header;
