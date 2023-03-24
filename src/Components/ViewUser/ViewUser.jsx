import React from 'react';
import Card from '../UI/Card';
import styles from './ViewUser.module.css';

const ViewUser = (props) => {
  if (props.userLists.length === 0) {
    return;
  }

  return (
    <Card className="user-list">
      <ul className={`${styles.listBox}`}>
        {props.userLists.map((user) => {
          return (
            <li className={`${styles.userItem}`} key={Math.random(100)}>
              {user.userName} ({user.userAge} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default ViewUser;
