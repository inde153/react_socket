import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from './api/axios';
import { requestURL } from './api/request';

import Layout from './layout/layout';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
    ],
  },
]);

function App() {
  const isLoggedIn: string | null = localStorage.getItem('login');

  const setLoginLocalStorage = () => {
    localStorage.setItem('login', 'true');
  };

  useEffect(() => {
    if (!isLoggedIn || isLoggedIn === 'false') {
      axios
        .post(`${requestURL.refresh}`)
        .then((res) => (res.data === 'ok' ? setLoginLocalStorage() : null));
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
