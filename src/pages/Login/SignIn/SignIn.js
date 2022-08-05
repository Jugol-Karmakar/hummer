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
import axios from "axios";

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
  }

  const handelLoginSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://lit-dusk-79362.herokuapp.com/login",
      {
        email,
      }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("Sent email and set your password");
  };

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="container mx-auto w-full max-w-sm bg-white px-8 py-3 mt-5 mb-4 rounded-xl shadow-lg">
        <h2 className="text-3xl text-center text-red-700 font-extrabold my-4">
          Login Please!!
        </h2>

        <form onSubmit={handelLoginSubmit}>
          <div className="mb-5">
            <label
              className="text-base text-black font-medium block pb-2"
              htmlFor="Your Email"
            >
              Your Email
            </label>
            <input
              onBlur={handelEmailBlur}
              className="w-full py-3 px-3 border border-gray-400 rounded-lg outline-gray-400"
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
              className="w-full py-3 px-3 border border-gray-400 rounded-lg outline-gray-400"
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
          </div>
          <p>{error?.message ? error?.message : ""}</p>

          <div className="text-center">
            <input
              onClick={() => signInWithEmailAndPassword()}
              className="w-full bg-red-600 text-lg text-white font-bold mt-4 py-3 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300"
              type="submit"
              value="Login"
            />
          </div>

          <SocialMedia></SocialMedia>
        </form>
      </div>

      <div>
        <div className="mx-auto w-full max-w-sm bg-white mb-3 py-3 rounded-xl shadow-lg">
          <p className="text-center font-bold text-gray-700">
            {" "}
            <Link onClick={resetPassword} to="/signin">
              Forget Password?
            </Link>
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm bg-white rounded-xl py-3 shadow-lg">
          <p className="text-center font-bold text-gray-700">
            <Link to="/signup">Create New Account</Link>
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
