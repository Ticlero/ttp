import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={`${styles.modal} ${!props.isHidden && styles.hidden}`}
      onClick={props.clickHandler}
      id='outter'
    >
      {props.children}
    </div>
  );
};

export default Modal;
