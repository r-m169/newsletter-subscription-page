import React from 'react';
import styles from "../style-modules/form.module.css"

const Form = () => {
  return (
    <div className={styles.formPart}>
      <input type="email" placeholder='Enter your email address'/>
      <button className={styles.subscribeBtn}>Subscribe Now</button>
    </div>
  )
}

export default Form