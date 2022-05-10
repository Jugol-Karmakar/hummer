import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItem = () => {
  const [user, loading, error] = useAuthState(auth);

  return <div></div>;
};

export default MyItem;
