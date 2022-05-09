import React, { useEffect, useState } from "react";
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
    </div>
  );
};

export default Inventory;
