import React from "react";
import { useParams } from "react-router-dom";

const InventoryUpdate = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default InventoryUpdate;
