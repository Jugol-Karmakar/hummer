import React from "react";
import logoImage from "../../../images/logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-stone-300 flex items-center justify-around py-6">
      <div className=" flex justify-start">
        <div>
          <img className="h-6 mx-3" src={logoImage} alt="" />
        </div>
        <h2 className="text-black font-medium">Copyright © {year} HUMMER</h2>
      </div>
      <div className="flex justify-end my-5">
        <FaFacebook className="mx-3 text-2xl cursor-pointer text-blue-500" />
        <FaInstagramSquare className="mx-3 text-2xl cursor-pointer text-pink-600" />
        <FaTwitter className="mx-3 text-2xl cursor-pointer text-cyan-500" />
        <FaYoutube className="mx-3 text-2xl cursor-pointer text-red-600" />
      </div>
    </div>
  );
};

export default Footer;
