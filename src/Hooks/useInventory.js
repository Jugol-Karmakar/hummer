import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInvetory] = useState([]);

  useEffect(() => {
    fetch("https://lit-dusk-79362.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInvetory(data));
  }, []);

  return [inventory, setInvetory];
};

export default useInventory;
