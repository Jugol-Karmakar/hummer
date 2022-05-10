import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InventoryUpdate = () => {
  const { id } = useParams();
  const [reStock, setReStock] = useState(0);

  const [updateInventory, setUpdateInventory] = useState({});
  useEffect(() => {
    const url = `https://lit-dusk-79362.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateInventory(data));
  }, []);

  const handleStock = () => {
    const quantity = updateInventory?.quantity;
    const newQuantity = parseInt(reStock) + parseInt(quantity);
    const updateQuantity = { quantity: newQuantity };

    const url = `https://lit-dusk-79362.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Item Updated");
      });
  };

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

            <div className=" flex justify-between my-3">
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
            <div className="mt-5">
              <div>
                <input
                  onChange={(e) => setReStock(e.target.value)}
                  className=" py-2 px-4 outline-none border rounded border-red-700"
                  type="number"
                  min={0}
                  name="quantity"
                  placeholder="quantity"
                />
                <button onClick={() => handleStock()}>Update Quantity</button>
              </div>

              <div className="mt-3">
                <button className="w-full bg-green-500 rounded text-black  font-bold py-2 px-5">
                  Delevered
                </button>
              </div>
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
