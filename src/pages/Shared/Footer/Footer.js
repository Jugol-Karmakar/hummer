import React from "react";
import logoImage from "../../../images/logo.png";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className=" bg-[#202127]">
      <footer className="container mx-auto footer p-10 pt-20 flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col max-w-xs mx-6">
          <div className="flex items-center">
            <img className="w-8 mr-2" src={logoImage} alt="" />
            <h3 className="text-xl font-bold text-red-600">HUMMER</h3>
          </div>
          <div>
            <p className="text-sm text-gray-300 py-3">
              Provide useful, constructive feedback. Talk about a range of
              elements, including customer service. Be detailed, specific, and
              honest. Leave out links and personal information. Keep it civil
              and friendly. Feel free to update your review if needed. Check
              you've got the right domain name or company.
            </p>
            <div className="mt-3">
              <div className="flex items-center mb-2">
                <MdLocationPin className="text-xl text-red-600 mr-2" />
                <span className="text-bold text-white">
                  21 Revolution Street, Paris ,France.
                </span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="text-xl text-red-600 mr-2" />
                <span className="text-bold text-white">+94792214</span>
              </div>
              <div className="flex items-center mb-2">
                <GrMail className="text-xl text-red-600 mr-2" />
                <span className="text-bold text-white">hummer@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-6">
          <span className="text-2xl font-bold text-white pb-4">Customers</span>
          <a href="/" className="text-gray-300 hover:underline">
            Buyer
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Supplier
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white pb-4">Company</span>
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            About Us
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Contact Us
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Our factories
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Environment
          </a>
        </div>

        <div className="flex flex-col mx-6">
          <span className="text-2xl font-bold text-white pb-4">Production</span>
          <a href="/" className="text-gray-300 hover:underline">
            Technology
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Products
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Quality
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Sales geography
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Our customers
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white pb-4">
            Further Information
          </span>
          <a href="/" className="text-gray-300 hover:underline">
            Terms & Conditions
          </a>
          <a href="/" className="text-gray-300 hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
      <hr className="mx-20 border-white" />
      <div className="flex items-center justify-around py-6">
        <div className="">
          <h2 className="text-white font-medium">
            Copyright © {year}{" "}
            <span className="text-[#c70909] font-bold">HUMMER. </span>
            All right Reserved.
          </h2>
        </div>
        <div className="flex flex-row mx-6">
          <div className="flex items-center">
            <div className="flex items-center bg-[#0b3fcf] p-3 rounded-full mr-2 cursor-pointer">
              <FaFacebook className="text-lg text-white" />
            </div>
            <div className="flex items-center bg-[#0780b8] p-3 rounded-full mr-2 cursor-pointer">
              <FaLinkedinIn className="text-lg text-white" />
            </div>
            <div className="flex items-center bg-[#c70909] p-3 rounded-full mr-2 cursor-pointer">
              <FaGooglePlusG className="text-lg text-white" />
            </div>
            <div className="flex items-center bg-[#3ca7ee] p-3 rounded-full mr-2 cursor-pointer">
              <FaTwitter className="text-lg text-white" />
            </div>
            <div className="flex items-center bg-[#c70909] p-3 rounded-full mr-2 cursor-pointer">
              <FaYoutube className="text-lg text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
