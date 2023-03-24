import React from "react";
import Card from "../UI/Card";
import styles from "./ViewUser.module.css";

const ViewUser = (props) => {
  let contents = <p>No data</p>;
  if (props.userLists.length > 0) {
    contents = (
      <ul className={`${styles.listBox}`}>
        {props.userLists.map((user) => {
          return (
            <li className={`${styles.userItem}`} key={Math.random(100)}>
              {user.userName} ({user.userAge} years old)
            </li>
          );
        })}
      </ul>
    );
  }

  return <Card className='user-list'>{contents}</Card>;
};
export default ViewUser;
