import React from "react";
import { inputTypes } from "../../types/itemFormTypes";
import classes from "./Input.module.css";

const Input = React.forwardRef<HTMLInputElement, inputTypes>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
