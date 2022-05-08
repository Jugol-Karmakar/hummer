import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialMedia = () => {
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, loading1, error1] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-red-600">
          Error: {error?.message} {error?.message}
        </p>
      </div>
    );
  }

  if (googleUser || gitUser) {
    navigate("/");
    toast("Log In Successfully !!");
  }

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center my-4">
          {errorElement}
          <button
            onClick={() => signInWithGoogle()}
            className="flex items-center justify-center  border border-neutral-300  bg-white hover:bg-zinc-200   py-2 px-4 mt-3  w-full rounded-full font-semibold text-lg"
          >
            <FaGoogle className="text-2xl text-red-500 mr-2"></FaGoogle>{" "}
            Continue With Google
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="flex items-center justify-center  border border-neutral-300  bg-white hover:bg-zinc-200  py-2 px-4 mt-3  w-full rounded-full font-semibold text-lg"
          >
            <FaGithub className="text-2xl text-black  mr-2" /> Continue With
            Github
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
