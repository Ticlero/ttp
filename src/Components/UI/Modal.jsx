import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles.modal} ${props.isHidden && styles.hidden}`}>
      {props.childern}
    </div>
  );
};

export default Modal;
