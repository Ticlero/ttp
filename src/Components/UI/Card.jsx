import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const classes = `${props.className}`;

  return (
    <div className={`${styles.card} ${styles[classes]}`}>{props.children}</div>
  );
};
export default Card;
