import React from 'react';
import styles from "../style-modules/card.module.css"; 
import Form from './Form';
const Card = () => {
  return (
    <div className={styles.wholePage}>
      <div className={styles.card}>
        <div className={styles.imageSide}>
          <img src="/assets/images/image_form.png" alt="" />
        </div>
        <div className={styles.contentSide}>
          <h2>Subscribe to our Newsletter!</h2>
          <p>Be the first to get exclusive offers ands the latest news</p>
          <div className={styles.formContainer}>
          <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
