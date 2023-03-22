import React, { useState } from "react";

import AddUser from "./Components/AddUser/AddUser";
import Modal from "./Components/UI/Modal";
import ModalContent from "./Components/UI/ModalContent";
const ErrorMessage = [
  "Please enter a valid name and age (non-empty values).",
  "Plese enter a valid age ( > 0 ).",
  "",
];

const App = (props) => {
  const [errType, setErrType] = useState(2);
  return (
    <div>
      <AddUser setErrorHandler={setErrType}></AddUser>
      <Modal isHidden={errType === 0 || errType === 1 ? true : false}>
        <ModalContent errorMessage={ErrorMessage[errType]}></ModalContent>
      </Modal>
    </div>
  );
};

export default App;
