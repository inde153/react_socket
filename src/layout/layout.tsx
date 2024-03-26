import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import styles from './layout.module.css';
import Footer from './footer';

function Layout() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
