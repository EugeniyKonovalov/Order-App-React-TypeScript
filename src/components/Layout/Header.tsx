import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import { onShowCartType } from "../../types/appPropType";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header: React.FC<onShowCartType> = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <CartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
