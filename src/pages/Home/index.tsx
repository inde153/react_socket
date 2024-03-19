import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav}></nav>
        <div className={styles.oauth}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
