import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMedia from "../SocialMedia/SocialMedia";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handelLoginSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
    toast("Log In Successfully !!");
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("Sent email and set your password");
  };

  return (
    <div className="min-h-screen">
      <div className="container  m-auto w-1/3 border px-8 mt-5 mb-8 rounded-md shadow-lg">
        <h2 className="text-3xl text-center text-cyan-500 font-semibold my-4">
          Login Please!!
        </h2>
        <SocialMedia></SocialMedia>

        <form onSubmit={handelLoginSubmit}>
          <div className="mb-3">
            <label
              className="text-base text-black font-medium block pb-2"
              htmlFor="Your Email"
            >
              Your Email
            </label>
            <input
              onBlur={handelEmailBlur}
              className="w-full py-2 px-6 rounded-full outline-none  border-b-2 focus:border-pink-400"
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              className="text-base text-black font-medium block pb-2"
              htmlFor="Your Password"
            >
              Your Password
            </label>
            <input
              onBlur={handelPasswordBlur}
              className="w-full py-2 px-6 rounded-full outline-none  border-b-2 focus:border-pink-400"
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
          </div>
          <p>{error?.message ? error?.message : ""}</p>
          <p className="py-2">
            {" "}
            <Link
              onClick={resetPassword}
              className="text-cyan-500 flex justify-end font-bold"
              to="/signin"
            >
              Forget Password?
            </Link>
          </p>

          <div className="text-center">
            <input
              onClick={() => signInWithEmailAndPassword()}
              className="bg-cyan-500 text-white text-lg font-semibold px-12 py-2 rounded-full mt-4 cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
          <div className="flex flex-col mb-5">
            <p className="text-base text-cyan-500 font-bold text-center mt-3 ">
              Don't have an Account?{" "}
            </p>
            <Link
              className="border border-neutral-400 hover:border-neutral-100 text-center bg-white p-3 mt-3  w-full rounded-full text-semibold  font-bold hover:bg-cyan-500"
              to="/signup"
            >
              Create New Account
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
