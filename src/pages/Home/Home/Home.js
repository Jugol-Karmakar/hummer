import React from "react";
import BuyCar from "../BuyCar/BuyCar";
import Hero from "../Hero/Hero";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Inventory isHome></Inventory>

      <BuyCar></BuyCar>
    </div>
  );
};

export default Home;
