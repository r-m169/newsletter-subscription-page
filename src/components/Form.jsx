import React, { useState } from 'react';
import styles from "../style-modules/form.module.css"

const Form = () => {
    const [email , setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error , setError] = useState('');
    

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const handleSubmit = async (e)=>{
      e.preventDefault();
      const isValidEmail = emailRegex.test(email);
      if(!isValidEmail){
        setError('Invalid email')
        return;
      }
      setError('');
      setIsSubmitting(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          to: email, 
          subject: 'EraaSoft Task',
          message: `Hello , the following email has subscribed to your newsletter: ${email}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if(response.ok){
        setIsSuccess(true)
      }else{
        setError('failed , Try again')
      }
    }
    if (isSuccess) {
      return <button className={styles.subscribeBtn}>Subscribed Successfully</button>;
    }
  return (
    <form onSubmit={handleSubmit} className={styles.formPart}>
      <input 
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <div style={{ color: '#dc3545' }}>{error}</div>}
      <button type="submit" disabled={isSubmitting} className={styles.subscribeBtn}>
        Subscribe
      </button>
    </form>
  );
};


export default Form