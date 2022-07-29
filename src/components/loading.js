import React from "react";
import ghost from "../images/Ghost.gif";
const Loading = () => {
  return (
    <div className="container">
      <div className="pt-36">
        <img className="ghost" src={ghost} alt="loading" />
      </div>
    </div>
  );
};

export default Loading;
