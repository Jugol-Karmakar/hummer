import React from "react";
import { Link } from "react-router-dom";
import BuyCar from "../BuyCar/BuyCar";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Inventory isHome></Inventory>
      <div className="flex justify-center pb-16">
        <Link to="/inventory">
          <button className=" bg-[#c70909] hover:bg-[#b90505] text-white font-bold px-8 py-3 text-lg">
            Manage Inventories
          </button>
        </Link>
      </div>
      <BuyCar></BuyCar>
      <Contact></Contact>
    </div>
  );
};

export default Home;
