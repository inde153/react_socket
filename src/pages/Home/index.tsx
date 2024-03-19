import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from '../../api/axios';

import styles from './home.module.css';

const getAccessTokenByGoogleOuath = async (credential: string) => {
  const res = await axios.post('/auth', {
    headers: { google_key: credential },
  });

  console.log(res);
};

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav}></nav>
        <div className={styles.oauth}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credential: string = credentialResponse.credential!;
              getAccessTokenByGoogleOuath(credential);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
