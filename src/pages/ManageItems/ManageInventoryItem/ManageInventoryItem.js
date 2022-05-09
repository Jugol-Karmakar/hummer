import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useInventory from "../../../Hooks/useInventory";

const ManageInventoryItem = (props) => {
  const { _id, name, image, price, description, supplier, quantity } =
    props.manageItems;

  const [inventory, setInvetory] = useInventory();

  const handelDeleteItem = (id) => {
    const sure = window.confirm("Are you sure want to delete?");
    if (sure) {
      const url = `https://lit-dusk-79362.herokuapp.com/inventory/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            const item = inventory.filter((inven) => inven._id !== id);
            setInvetory(item);
          }
        });
    }
  };
  return (
    <div className="bg-white shadow-xl rounded-md overflow-hidden">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-xl text-red-600 font-bold mb-2">
          {price} <sub>/MRP</sub>
        </p>
        <p className="text-base text-neutral-500 my-2">{description}</p>
        <div className="flex justify-between my-2">
          <p className="text-base font-semibold mr-1 ">
            Available :{" "}
            <span className="text-red-600 font-bold">{quantity}</span>
          </p>
          <p className="font-semibold text-base ">
            Supplier :{" "}
            <span className="text-red-600 font-bold">{supplier}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handelDeleteItem}
          className="w-full flex justify-center items-center text-white bg-red-700 hover:bg-red-600  py-2 font-semibold"
        >
          <FaTrashAlt className="text-xl mx-2"></FaTrashAlt>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageInventoryItem;
