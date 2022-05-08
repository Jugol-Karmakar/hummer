import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { logoImg } from "../../../images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <div>
        <h2 className="text-3xl font-black text-cyan-500">HUMMER</h2>
      </div>
      <nav className="flex justify-center p-4">
        <CustomLink to="/">Home</CustomLink>
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
