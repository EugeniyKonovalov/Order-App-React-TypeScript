import React from "react";
import ChildrenPropTypes from "../../types/appPropType";

import classes from "./Card.module.css";

const Card: React.FC<ChildrenPropTypes> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
