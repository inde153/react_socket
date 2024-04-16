import React from 'react';
import { requestURL } from '../../api/request';
import styles from './login.module.css';

const loginByGoogle = async () => {
  window.open(
    `${process.env.REACT_APP_SERVER_URL}${requestURL.googleLogin}`,
    '_self',
  );
};

function Login() {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => loginByGoogle()}>
        Sign in with Google
      </button>
      {/* <button className={styles.btn}>Sign in with Kakao</button> */}
    </div>
  );
}

export default Login;
