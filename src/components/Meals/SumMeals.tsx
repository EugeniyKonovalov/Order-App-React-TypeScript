import React from "react";
import classes from "./SumMeals.module.css";
const SumMeals: React.FC = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food, Delivered to you</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default SumMeals;
