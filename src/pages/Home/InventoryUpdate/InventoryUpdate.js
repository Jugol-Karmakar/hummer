import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InventoryUpdate = () => {
  const { id } = useParams();
  const [updateInventory, setUpdateInventory] = useState({});
  useEffect(() => {
    const url = `https://lit-dusk-79362.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateInventory(data));
  }, []);
  return (
    <div className="container mx-auto px-10 min-h-screen mt-10">
      <div className="flex  max-w-2xl mx-auto my-5">
        <div className="w-full h-80">
          <img
            className="w-full h-full object-cover"
            src={updateInventory.image}
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="px-5">
            <p className="text-[#c70909] text-lg font-semibold">
              ID : {updateInventory._id}
            </p>
            <p className="text-base text-neutral-500 my-2">
              {updateInventory.description}
            </p>
            <h3 className="text-2xl font-bold mb-2">{updateInventory.name}</h3>
            <p className="text-xl text-black font-bold my-3">
              Price : ৳{updateInventory.price} <sub>/MRP</sub>
            </p>

            <div className="flex justify-between my-3">
              <p className="text-base font-semibold mr-1 ">
                Available :{" "}
                <span className="text-[#c70909] text-lg font-bold">
                  {updateInventory.quantity}
                </span>
              </p>
              <p className="font-semibold text-base ">
                Supplier :{" "}
                <span className="text-black font-bold">
                  {updateInventory.supplier}
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <input
                className="py-2 px-4 outline-none border rounded border-red-700"
                type="text"
                placeholder="quantity"
              />
              <input
                className="hover:bg-[#c70909] border border-[#c70909] rounded text-black hover:text-white mt-4 font-bold py-3"
                type="submit"
                value="Update Quantity"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-16 mt-20">
        <Link to="/inventory">
          <button className="bg-[#c70909] hover:bg-[#b10505] rounded text-white font-semibold px-8 py-3 text-lg">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryUpdate;
