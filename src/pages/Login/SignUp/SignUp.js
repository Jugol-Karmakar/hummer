import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
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

  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);

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
    <div className="min-h-screen ">
      <div className="container  mx-auto w-1/3 border px-8 mt-5 mb-8 rounded-md shadow-lg">
        <h2 className="text-3xl text-center text-cyan-500 font-semibold my-4">
          Register PLease!!
        </h2>
        <SocialMedia></SocialMedia>
        <form onSubmit={handelUserSubmit}>
          <div className="mb-3">
            <label
              className="text-base text-black font-medium block pb-2"
              htmlFor="Your Email"
            >
              Your Email
            </label>
            <input
              onBlur={handelEmailBlur}
              className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-pink-400"
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
              className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-pink-400"
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
              className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-pink-400"
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
              className="bg-cyan-500 text-white font-semibold px-12 py-2 rounded-full mt-4 cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
        </form>

        <p className="text-base text-center mt-3 mb-5">
          Already have an account?{" "}
          <Link className="text-blue-500 font-bold" to="/signin">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
