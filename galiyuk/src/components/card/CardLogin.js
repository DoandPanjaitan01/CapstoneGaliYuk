import React from "react";
import "../../assets/css/card.css";

const CardLogin = (props) => {
  return <div className="card">{props.children}</div>;
};

export default CardLogin;