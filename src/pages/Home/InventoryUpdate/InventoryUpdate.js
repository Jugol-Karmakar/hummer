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
      <div>
        <div className="bg-white shadow-md  rounded-md overflow-hidden max-w-sm my-5">
          <div className="w-full h-72">
            <img
              className="w-full h-full object-cover"
              src={updateInventory.image}
              alt=""
            />
          </div>
          <div className="p-5">
            <p className="text-red-700 font-semibold">
              ID : {updateInventory._id}
            </p>
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
        <div>
          <h2>Update Quantity</h2>
          <form>
            <input type="text" placeholder="Quantity" />
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>

      <div className="flex justify-center pb-16">
        <Link to="/manageinventories">
          <button className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-3 text-lg">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryUpdate;
