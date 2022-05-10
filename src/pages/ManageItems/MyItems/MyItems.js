import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = ({ isHome }) => {
  const [user, loading, error] = useAuthState(auth);

  const [myItems, setMyItem] = useState([]);

  useEffect(() => {
    const url = `https://lit-dusk-79362.herokuapp.com/inventory/filter?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [user]);

  return (
    <div className="container mx-auto px-10 my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {myItems.map((myItem) => (
        <MyItem isHome={isHome} key={myItem._id} myItem={myItem}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;
