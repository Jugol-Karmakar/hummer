import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../../Hooks/useInventory";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";

const ManageInventories = () => {
  const [inventory, setInvetory] = useInventory();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-5 text-red-700">
        Manage inventories
      </h2>
      <div className="container mx-auto px-10 my-10 grid grid-cols-3 gap-8">
        {inventory.map((manageItems) => (
          <ManageInventoryItem
            key={manageItems._id}
            manageItems={manageItems}
          ></ManageInventoryItem>
        ))}
      </div>
      <div className="flex justify-center pb-16">
        <Link to="/additem">
          <button className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-3 text-lg">
            Add Item
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
