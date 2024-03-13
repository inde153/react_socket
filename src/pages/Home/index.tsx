import React from 'react';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav}></nav>
        <div>
          <button className={styles.btn}>Google</button>
          <button className={styles.btn}>Kakao</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
