import React from "react";

const InventoryItem = (props) => {
  const { name, image, price, description, supplier, quantity } =
    props.inventory;
  return (
    <div className="bg-white shadow-md hover:shadow-xl  rounded-md overflow-hidden">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-xl text-green-600 font-bold mb-2">
          {price} <sub>/MRP</sub>
        </p>
        <p className="text-base text-neutral-500 my-2">{description}</p>
        <div className="flex justify-between my-2">
          <p className="text-base font-semibold mr-1 ">
            Available :{" "}
            <span className="text-green-500 font-bold">{quantity}</span>
          </p>
          <p className="font-semibold text-base ">
            Supplier :{" "}
            <span className="text-green-500 font-bold">{supplier}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-cyan-500 w-full py-2 font-bold hover:bg-green-500">
          Update
        </button>
      </div>
    </div>
  );
};

export default InventoryItem;
