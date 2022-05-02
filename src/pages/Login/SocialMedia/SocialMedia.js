import React from "react";

import { FaFacebook, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SocialMedia = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center my-4">
          <button className="flex items-center justify-center  border border-neutral-300  bg-white hover:bg-zinc-200   py-2 px-4 mt-3  w-full rounded-full font-semibold text-lg">
            <FaGoogle className="text-2xl text-red-500 mr-2"></FaGoogle>{" "}
            Continue With Google
          </button>
          <button className="flex items-center justify-center  border border-neutral-300  bg-white hover:bg-zinc-200  py-2 px-4 mt-3  w-full rounded-full font-semibold text-lg">
            <FaFacebook className="text-2xl text-blue-500  mr-2" /> Continue
            With Facebook
          </button>
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="border-t border-gray-400 w-24"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="border-t border-gray-400 w-24"></div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialMedia;
