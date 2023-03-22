import React from 'react';
import Card from '../UI/Card';
const ViewUser = (props) => {
  return (
    <Card className="user-list">
      <ul>
        {props.userLists.map((user) => {
          return (
            <li key={Math.random(100)}>
              {user.userName} ({user.userAge} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default ViewUser;
