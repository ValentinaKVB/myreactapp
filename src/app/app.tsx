// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

export default function Home() {

  const url = '/aldis/promiseTest';
  const [msg, setMsg] = useState('');

  function handleClick() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setMsg(data.message))
      .catch((error) => setMsg(error.message));
  }

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.message}>{msg}</div>
        <button className={styles.btnGet} onClick={handleClick}>Get Message</button>
      </div>
    </div>
  )
}