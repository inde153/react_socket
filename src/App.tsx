import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

const paths = [{ path: '/', element: Home }];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {paths.map((ele) => (
            <Route key={ele.path} path={ele.path} element={<ele.element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
