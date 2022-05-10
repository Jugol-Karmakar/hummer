import React from "react";
import useInventory from "../../../Hooks/useInventory";
import ManageInvenItem from "../ManageInvenItem/ManageInvenItem";

const ManageInventory = () => {
  const [inventory, setInvetory] = useInventory();
  return (
    <div>
      <h2 className="text-4xl text-center font-black text-[#c70909] my-4">
        Manage Items
      </h2>
      <div className="container mx-auto px-10 my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inventory.map((inventory) => (
          <ManageInvenItem
            inventory={inventory}
            key={inventory._id}
          ></ManageInvenItem>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
