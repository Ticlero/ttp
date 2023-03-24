import React from "react";
import styles from "./ModalContent.module.css";
import Card from "./Card";
import Button from "./Button";

const ModalContent = (props) => {
  return (
    <Card className='modal-box'>
      <div className={`${styles["modal-contents"]}`}>
        <div className={`${styles["modal-content__title"]}`}>{props.title}</div>
        <div className={`${styles["modal-content__msg"]}`}>
          {props.errorMessage}
        </div>
        <div className={`${styles["modal-content__btn"]}`}>
          <Button type='button' onClick={props.clickHandler}>
            Okay
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ModalContent;
