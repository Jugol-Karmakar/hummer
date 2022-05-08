import React from "react";
import Hero from "../Hero/Hero";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div className="min-h-full">
      <Hero></Hero>
      <Inventory isHome></Inventory>
    </div>
  );
};

export default Home;
