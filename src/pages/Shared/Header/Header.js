import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import logoImage from "../../../images/logo.png";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="hidden lg:flex lg:justify-center lg:items-center p-4">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/inventory">Inventory</CustomLink>
          {user && <CustomLink to="/manageinventory">Manage Items</CustomLink>}
          {user && <CustomLink to="/additem">Add Items</CustomLink>}
          {user && <CustomLink to="/myitem">My Items</CustomLink>}

          <CustomLink to="/blog">Blogs</CustomLink>
          {user ? (
            <button
              className="bg-[#c70909] hover:bg-[#b90909] px-4 py-2 font-bold text-lg text-white  rounded-full"
              onClick={handelSignOut}
            >
              sign out
            </button>
          ) : (
            <div className="flex">
              <CustomLink to="/signin">
                <FaUserPlus className="mr-2 text-xl" />
                SignIn
              </CustomLink>
              <CustomLink to="/signup">
                <FaSignInAlt className="mr-2 text-xl" />
                SignUp
              </CustomLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
