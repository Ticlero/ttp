import React, { useState } from 'react';
import Card from '../UI/Card';
import AddUserForm from '../AddUserForm/AddUserForm';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  return (
    <Card className="add-user-box">
      <AddUserForm
        setErrorHandler={props.setErrorHandler}
        addUserList={props.addUserList}
      ></AddUserForm>
    </Card>
  );
};
export default AddUser;
