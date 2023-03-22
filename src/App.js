import React, { useState } from 'react';

import AddUser from './Components/AddUser/AddUser';
import Modal from './Components/UI/Modal';
import ModalContent from './Components/UI/ModalContent';
import ViewUser from './Components/ViewUser/ViewUser';
const ErrorMessage = [
  'Please enter a valid name and age (non-empty values).',
  'Plese enter a valid age ( > 0 ).',
  '',
];

const App = (props) => {
  const [errType, setErrType] = useState(2);
  const [userList, setUserList] = useState([]);

  const modalClickHandler = (e) => {
    if (e.target.type === 'button' || e.target.id === 'outter') {
      setErrType(2);
    }
  };

  return (
    <div>
      <AddUser setErrorHandler={setErrType} addUserList={setUserList}></AddUser>
      <ViewUser userLists={userList}></ViewUser>
      <Modal
        isHidden={errType === 0 || errType === 1 ? true : false}
        clickHandler={modalClickHandler}
      >
        <ModalContent
          errorMessage={ErrorMessage[errType]}
          clickHandler={modalClickHandler}
        ></ModalContent>
      </Modal>
    </div>
  );
};

export default App;
