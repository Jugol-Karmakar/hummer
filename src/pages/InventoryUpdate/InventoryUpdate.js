import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryUpdate = () => {
  const { id } = useParams();
  const [updateInventory, setUpdateInventory] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateInventory(data));
  }, []);
  return (
    <div className="container mx-auto px-10 min-h-screen">
      <div className="bg-white shadow-md  rounded-md overflow-hidden">
        <div className="w-full h-72">
          <img
            className="w-full h-full object-cover"
            src={updateInventory.image}
            alt=""
          />
        </div>
        <div className="p-5">
          <h3 className="text-2xl font-bold mb-2">{updateInventory.name}</h3>
          <p className="text-xl text-red-600 font-bold mb-2">
            {updateInventory.price} <sub>/MRP</sub>
          </p>
          <p className="text-base text-neutral-500 my-2">
            {updateInventory.description}
          </p>
          <div className="flex justify-between my-2">
            <p className="text-base font-semibold mr-1 ">
              Available :{" "}
              <span className="text-red-600 font-bold">
                {updateInventory.quantity}
              </span>
            </p>
            <p className="font-semibold text-base ">
              Supplier :{" "}
              <span className="text-red-600 font-bold">
                {updateInventory.supplier}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-full text-white bg-red-700   py-2 font-bold">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryUpdate;
