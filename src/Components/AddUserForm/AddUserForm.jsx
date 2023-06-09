import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const userNameHandler = (e) => {
    setEnteredUsername(e.target.value);
    setIsNameValid(true);
  };

  const userAgeHandler = (e) => {
    if (
      !isNaN(Number(e.nativeEvent.data)) ||
      e.nativeEvent.data === null ||
      e.nativeEvent.data === "-"
    ) {
      setEnteredUserAge(e.target.value);
      if (!isNaN(Number(e.target.value))) setIsAgeValid(true);
    }
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    const ageValue = Number(enteredUserAge);
    let flag = true;

    if (enteredUsername.trim().length === 0) {
      setIsNameValid(false);
      props.setErrorHandler(0);
      flag = false;
    }

    if (isNaN(ageValue) || enteredUserAge.trim().length === 0) {
      setIsAgeValid(false);
      props.setErrorHandler(0);
      flag = false;
    }

    if (!isNaN(ageValue)) {
      if (ageValue < 0) {
        setIsAgeValid(false);
        props.setErrorHandler(1);
        flag = false;
      }
    }

    if (flag) {
      const userData = {
        userName: enteredUsername,
        userAge: ageValue,
      };

      props.addUserList((prev) => {
        const lists = [...prev];
        lists.unshift(userData);
        return lists;
      });

      setEnteredUsername("");
      setEnteredUserAge("");
    }
  };

  return (
    <form onSubmit={onSubmitClick}>
      <div className={styles["form-box"]}>
        <div
          className={`${styles["form-control"]} ${
            !isNameValid && styles.invalid
          }`}
        >
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            placeholder='Add new username'
            value={enteredUsername}
            type='text'
            onChange={userNameHandler}
          ></input>
        </div>
        <div
          className={`${styles["form-control"]} ${
            !isAgeValid && styles.invalid
          }`}
        >
          <label htmlFor='userage'>Age (Years)</label>
          <input
            id='userage'
            placeholder='Add user age'
            value={enteredUserAge}
            type='text'
            onChange={userAgeHandler}
          ></input>
        </div>
        <div className={`${styles["form-control"]}`}>
          <Button type='submit'>Add User</Button>
        </div>
      </div>
    </form>
  );
};
export default AddUserForm;
