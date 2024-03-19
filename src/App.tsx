import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './pages/Home';
import Chat from './pages/Chat';

const paths = [
  { path: '/', element: Home },
  { path: '/chat', element: Chat },
];

const clientId: string = process.env.REACT_APP_GOOGLE_CLCIENT_ID!;

console.log(clientId);

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
          <Routes>
            {paths.map((ele) => (
              <Route key={ele.path} path={ele.path} element={<ele.element />} />
            ))}
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
