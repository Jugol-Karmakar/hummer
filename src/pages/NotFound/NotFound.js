import React from "react";
import notImage from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="w-96 mx-auto mt-10 rounded overflow-hidden">
      <img className="w-full" src={notImage} alt="" />
    </div>
  );
};

export default NotFound;
