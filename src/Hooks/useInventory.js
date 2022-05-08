import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInvetory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInvetory(data));
  }, []);

  return [inventory, setInvetory];
};

export default useInventory;
