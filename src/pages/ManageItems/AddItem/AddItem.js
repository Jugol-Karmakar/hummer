import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItem = () => {
  const handelAddInventory = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;

    const inventory = { name, image, price, description, quantity, supplier };

    fetch("https://lit-dusk-79362.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Inventory Add Succesfully!!");
      });
  };

  return (
    <div className="min-h-screen container my-10">
      <h2 className="text-3xl text-center py-4">Add Inventory Item</h2>
      <div className="max-w-lg mx-auto bg-cyan-500 p-10 rounded">
        <form onSubmit={handelAddInventory} className="flex flex-col">
          <input
            className="my-2 py-2 px-4 outline-none rounded"
            type="text"
            name="name"
            placeholder="inventory name"
          />
          <input
            className="my-2 py-2 px-4 outline-none rounded"
            type="text"
            name="image"
            placeholder="image"
          />
          <input
            className="my-2 py-2 px-4 outline-none rounded"
            type="text"
            name="price"
            placeholder="price"
          />
          <input
            className="my-2 py-2 px-4 outline-none rounded"
            type="text"
            name="quantity"
            placeholder="quantity"
          />
          <input
            className="my-2 py-2 px-4 outline-none rounded"
            type="text"
            name="supplier"
            placeholder="supplier name"
          />
          <textarea
            className="my-2 py-2 px-4 outline-none rounded"
            type="text"
            name="description"
            placeholder="description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="bg-[#c70909] hover:bg-[#b90a0a] rounded  font-semibold text-white cursor-pointer  py-3"
            type="submit"
            value="Add Inventory"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItem;
