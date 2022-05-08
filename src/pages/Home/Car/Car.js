import React from "react";

const Car = (props) => {
  const { name, image, price, description, supplier, quantity } = props.car;
  return (
    <div className="shadow-md hover:shadow-xl border rounded-md overflow-hidden">
      <div className="h-25">
        <img className="w-full" src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <h4>Price : {price}</h4>
      <h3>Supplier : {supplier}</h3>
      <h5>Quantity : {quantity}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Car;
