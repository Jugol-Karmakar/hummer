import React from "react";
import Hero from "../Hero/Hero";
import InventoryItem from "../InventoryItem/InventoryItem";

const Home = () => {
  return (
    <div className="min-h-full">
      <Hero></Hero>
      <InventoryItem></InventoryItem>
    </div>
  );
};

export default Home;
