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
      <div className="container mx-auto lg:px-20 px-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="mx-6 flex flex-col">
            <div className="flex items-center py-3">
              <img className="h-6 mx-3" src={logoImage} alt="" />
              <h1 className="text-3xl font-bold text-[#c70909]"> Hummer </h1>
            </div>

            <p className="text-sm text-neutral-500">
              Provide useful, constructive feedback. Talk about a range of
              elements, including customer service. Be detailed, specific, and
              honest. Leave out links and personal information. Keep it civil
              and friendly. Feel free to update your review if needed. Check
              you've got the right domain name or company.
            </p>
          </div>
          <div className="mx-6">
            <h3 className="text-2xl font-bold py-3">Contact</h3>
            <div className="">
              <p className="text-base my-2 font-semibold flex  items-center">
                {" "}
                <MdLocationPin className="text-2xl mr-3 text-[#c70909]"></MdLocationPin>
                23/4 Shibbari mor,Khulna
              </p>
              <p className="text-base my-2 font-semibold flex items-center">
                {" "}
                <GrMail className="text-xl mr-3  text-[#c70909]"></GrMail>
                Email@gmail.com
              </p>
              <p className="text-base my-2 font-semibold flex items-center">
                {" "}
                <BsFillPhoneFill className="text-xl mr-3  text-[#c70909]"></BsFillPhoneFill>
                34623454435
              </p>
            </div>

            <div className="flex my-3 justify-start">
              <FaFacebook className="text-2xl cursor-pointer text-blue-500 mx-2" />
              <FaInstagramSquare className="text-2xl cursor-pointer text-black mx-2" />
              <FaTwitter className=" text-2xl cursor-pointer text-cyan-500 mx-2" />
              <FaYoutube className="text-2xl cursor-pointer text-red-600 mx-2" />
            </div>
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
