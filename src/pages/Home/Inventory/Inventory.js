import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInventory from "../../../Hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";

const Inventory = (props) => {
  const { isHome } = props;
  const [inventory, setInvetory] = useInventory();

  return (
    <div>
      <div
        className={
          isHome ? "mt-20 flex justify-center" : "mt-10 flex justify-center"
        }
      >
        <h2 className="text-4xl font-bold my-5">Inventory Items</h2>
      </div>
      <div className="container mx-auto px-10 my-10 grid grid-cols-3 gap-8">
        {isHome
          ? inventory
              .slice(0, 6)
              .map((inventory) => (
                <InventoryItem
                  isHome={isHome}
                  key={inventory._id}
                  inventory={inventory}
                ></InventoryItem>
              ))
          : inventory.map((inventory) => (
              <InventoryItem
                key={inventory._id}
                inventory={inventory}
              ></InventoryItem>
            ))}
      </div>
      {!isHome && (
        <div className="flex justify-center pb-16">
          <Link to="/additem">
            <button className="bg-[#c70909] hover:bg-[#C70909] rounded text-white font-semibold px-8 py-3 text-lg">
              Add Item
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Inventory;
