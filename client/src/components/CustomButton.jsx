import React from "react";

import styles from "../styles";

function CustomButton({ title, handleClick, restStyles }) {
  return (
    <button
      className={`${styles.btn} ${restStyles}`}
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
