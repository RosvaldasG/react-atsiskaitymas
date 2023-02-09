import React from "react";
import styles from "./input.module.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.main}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Input;
