import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);

  const [myItems, setMyItem] = useState([]);

  useEffect(() => {
    const getMyItem = async () => {
      const email = user?.email;
      const url = `https://lit-dusk-79362.herokuapp.com/inventory/filter?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setMyItem(data);
    };
    getMyItem();
  }, [user]);

  return (
    <div className="container mx-auto px-10 my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {myItems.map((myItem) => (
        <MyItem key={myItem._id} myItem={myItem}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;
