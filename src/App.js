import React from 'react';
import Home from './page/Home';
import Write from './page/Reply';
import Reply from './page/Reply';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Write" element={<Write />} />
      <Route path="/Reply" element={<Reply />} />
    </Routes>
  );
}

export default App;
