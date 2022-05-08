import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const InventoryItem = () => {
  const [cars, setCar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <div>
      <div className="mt-20 flex justify-center">
        <h2 className="text-4xl font-bold my-5">Inventory Items</h2>
      </div>
      <div className="container mx-auto px-10 my-10 grid grid-cols-3 gap-6">
        {cars.map((car) => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default InventoryItem;
