import React from "react";
import styles from "./ModalContent.module.css";
import Card from "./Card";

const ModalContent = (props) => {
  return (
    <Card>
      <div className={`${styles["modal-contents"]}`}></div>
    </Card>
  );
};

export default ModalContent;
