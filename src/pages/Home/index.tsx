import React from 'react';
import styles from './home.module.css';

const loginByGoogle = async () => {
  window.open('http://localhost:8000/auth/google', '_self');
};

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav}></nav>
        <div>
          <button className={styles.btn} onClick={() => loginByGoogle()}>
            Sign in with Google
          </button>
          <button className={styles.btn}>Sign in with Kakao</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
