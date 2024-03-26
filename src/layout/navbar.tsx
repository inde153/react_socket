import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';

function navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navbar__menu}>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/chat')}>Chat</li>
          <li onClick={() => navigate('/login')}>Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
