import React from "react";
import logoImage from "../../../images/logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto flex flex-row justify-around lg:px-20 px-10 pt-20">
        <div className="lg:w-1/2">
          <div className="flex items-cente py-3">
            <img className="h-6 mx-3" src={logoImage} alt="" />
            <h1 className="text-3xl font-bold text-[#c70909]"> Hummer </h1>
          </div>

          <p className="text-sm text-neutral-500">
            Provide useful, constructive feedback. Talk about a range of
            elements, including customer service. Be detailed, specific, and
            honest. Leave out links and personal information. Keep it civil and
            friendly. Feel free to update your review if needed. Check you've
            got the right domain name or company.
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Contact</h3>
          <div className="flex items-center my-2">
            <MdLocationPin className="text-xl mx-2 text-[#c70909]"></MdLocationPin>
            <p className="text-lg  font-semibold">23/4 Shibbari mor,Khulna</p>
          </div>
          <div className="flex items-center my-2">
            <GrMail className="text-lg mx-2 text-[#c70909]"></GrMail>
            <p className="text-lg  font-semibold">Email@gmail.com</p>
          </div>
          <div className="flex items-center my-2">
            <BsFillPhoneFill className="text-lg mx-2 text-[#c70909]"></BsFillPhoneFill>
            <p className="text-lg  font-semibold">34623435</p>
          </div>
          <div className="flex my-3 justify-around">
            <FaFacebook className="text-2xl cursor-pointer text-blue-500" />
            <FaInstagramSquare className="text-2xl cursor-pointer text-pink-600" />
            <FaTwitter className=" text-2xl cursor-pointer text-cyan-500" />
            <FaYoutube className="text-2xl cursor-pointer text-red-600" />
          </div>
        </div>
      </div>

      <div className=" flex justify-center my-3">
        <h2 className="text-black font-medium">
          Copyright © {year}{" "}
          <span className="text-[#c70909] font-bold">HUMMER</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
