import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import SumMeals from "./SumMeals";

const Meals: React.FC = () => {
  return (
    <Fragment>
      <SumMeals />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
