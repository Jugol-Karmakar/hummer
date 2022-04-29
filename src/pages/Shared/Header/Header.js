import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
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
  );
};

export default Header;
