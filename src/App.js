import Home from './page/Home';
import Write from './page/Reply';
import Reply from './page/Reply';
import Write from './pages/Write';
import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Write" element={<Write />} />
      <Route path="/Reply" element={<Reply />} />
        <Home />
        <Write />
    </Routes>
  );
}

export default App;

// const AppContainer = styled.div`
//   display: block;
//   align-content: center;
//   margin: 0 auto;
//   background-color: darkgray;

//   height:100%;
// `