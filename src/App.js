import Home from './pages/Home';
import Write from './pages/Write';
import Reply from './pages/Reply.jsx';
import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Reply" element={<Reply />} />
      </Routes>
    </div>
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
