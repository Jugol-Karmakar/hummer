import React from "react";
import { Link } from "react-router-dom";
import BuyCar from "../BuyCar/BuyCar";
import Hero from "../Hero/Hero";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Inventory isHome></Inventory>
      <div className="flex justify-center pb-16">
        <Link to="/inventory">
          <button className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-3 text-lg">
            Manage Inventory
          </button>
        </Link>
      </div>
      <BuyCar></BuyCar>
    </div>
  );
};

export default Home;
