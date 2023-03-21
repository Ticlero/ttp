import React, { useState } from 'react';
import Button from '../UI/Button';

import styles from './AddUserForm.module.css';

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUseAge, setEnteredUserAge] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const userNameHandler = (e) => {
    setEnteredUsername(e.target.value);
    setIsNameValid(true);
  };

  const userAgeHandler = (e) => {
    setEnteredUserAge(e.target.value);
    setIsAgeValid(true);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    let flag = true;
    if (enteredUsername.trim().length === 0) {
      setIsNameValid(false);
      flag = false;
    }
  };

  return (
    <form onSubmit={onSubmitClick}>
      <div className={styles['form-box']}>
        <div
          className={`${styles['form-control']} ${
            !isNameValid && styles.invalid
          }`}
        >
          <label>Username</label>
          <input
            placeholder="Add new username"
            value={enteredUsername}
            type="text"
            onChange={userNameHandler}
          ></input>
        </div>
        <div className={`${styles['form-control']}`}>
          <label>Age (Years)</label>
          <input
            placeholder="Add user age"
            value={enteredUseAge}
            type="text"
            onChange={userAgeHandler}
          ></input>
        </div>
        <div className={`${styles['form-control']}`}>
          <Button type="submit">Add User</Button>
        </div>
      </div>
    </form>
  );
};
export default AddUserForm;
