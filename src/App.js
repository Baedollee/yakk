import Home from './pages/Home';
import Write from './pages/Write';
import Reply from './pages/Reply.jsx';
import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';
import ReplyWrite from './pages/ReplyWrite';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Write/:id" element={<Write />} />
        <Route path="/Reply/:id" element={<Reply />} />
        <Route path="/Reply/:id/ReplyWrite" element={<ReplyWrite />} />
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



// const [commentList, setCommnetList] = useState([{
//   id: ''
//   username: ''
//   title: ''
//   content: ''
//   createdAt: ''
//   }])