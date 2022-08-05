import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handelConfirmBlur = (e) => {
    setConfirm(e.target.value);
  };

  const handelUserSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      toast("password don't match");
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    toast("register successfully & verify your email");
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="container mx-auto w-full max-w-sm bg-white px-8 py-3 mt-5 mb-4 rounded-xl shadow-lg">
        <h2 className="text-3xl text-center text-red-700 font-extrabold my-4">
          SignUp Please!!
        </h2>

        <form onSubmit={handelUserSubmit}>
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

          <div className="mb-5">
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
          <div>
            <label
              className="text-base text-black font-medium block pb-2"
              htmlFor="Confirm Password"
            >
              Confirm Password
            </label>
            <input
              onBlur={handelConfirmBlur}
              className="w-full py-3 px-3 border border-gray-400 rounded-lg outline-gray-400"
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
          </div>

          <div className="text-center">
            <input
              onClick={() => createUserWithEmailAndPassword()}
              className="w-full bg-red-600 text-lg text-white font-bold mt-4 py-3 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300"
              type="submit"
              value="Register"
            />
          </div>
          <SocialMedia></SocialMedia>
        </form>
      </div>
      <div className="mx-auto w-full max-w-sm bg-white mb-3 py-3 rounded-xl shadow-lg">
        <p className="text-center font-bold text-gray-700">
          <Link to="/signin">
            Already have an account?
            <span className="text-blue-600 font-bold"> Sign In</span>
          </Link>
        </p>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
