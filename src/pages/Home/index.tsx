import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import axios from '../../api/axios';
import { requestURL } from '../../api/request';

function Home() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .post(`${requestURL.refresh}`)
      .then((res) => (res.data === true ? setStatus(true) : null));
  }, []);

  return <>{console.log(status)}</>;
}

export default Home;
