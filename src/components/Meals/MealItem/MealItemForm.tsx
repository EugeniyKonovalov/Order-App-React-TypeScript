import React, { useRef, useState } from "react";
import { addToCartType } from "../../../types/appPropType";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm: React.FC<addToCartType> = (props) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);

  const submitHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount 1-5!</p>}
    </form>
  );
};

export default MealItemForm;
