import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
