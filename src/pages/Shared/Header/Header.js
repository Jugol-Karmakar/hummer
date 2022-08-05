import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logoImage from "../../../images/logo.png";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
    toast("Log Out Successfull!!");
  };

  return (
    <div className="flex items-center justify-between px-10 py-2 bg-white sticky top-0 z-50">
      <div className="flex items-center cursor-pointer">
        <img className="h-8 w-full mx-2 object-cover" src={logoImage} alt="" />
        <h2 className="text-3xl font-black text-[#c70909]">HUMMER</h2>
      </div>
      <ToastContainer></ToastContainer>
      <nav className="">
        <div className="hidden lg:flex lg:justify-center lg:items-center p-3">
          <Link className="mr-2 inline-block px-3 text-lg font-semibold" to="/">
            Home
          </Link>
          <Link
            className="mr-2 inline-block px-3 text-lg font-semibold"
            to="/inventory"
          >
            Inventory
          </Link>
          {user && (
            <Link
              className="mr-2 inline-block px-3 text-lg font-semibold"
              to="/manageinventory"
            >
              Manage Items
            </Link>
          )}
          {user && (
            <Link
              className="mr-2 inline-block px-3 text-lg font-semibold"
              to="/additem"
            >
              Add Items
            </Link>
          )}
          {user && (
            <Link
              className="mr-2 inline-block px-3 text-lg font-semibold"
              to="/myitem"
            >
              My Items
            </Link>
          )}

          <Link
            className="mr-2 inline-block px-3 text-lg font-semibold"
            to="/blog"
          >
            Blogs
          </Link>
          {user ? (
            <button
              className="flex items-center bg-[#c70909] hover:bg-[#b90909] px-6 py-2 font-semibold text-lg text-white rounded-full"
              onClick={handelSignOut}
            >
              <FaSignOutAlt className="mr-2 text-xl" />
              Log Out
            </button>
          ) : (
            <Link
              to="/signin"
              className="flex items-center px-6 py-2 text-[#b90909] text-lg font-semibold border border-red-600 hover:bg-[#b90909] hover:text-white rounded-full transition duration-300"
            >
              <FaSignInAlt className="mr-2 text-xl" />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
