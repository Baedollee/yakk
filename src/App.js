import Home from './pages/Home';
import Write from './pages/Write';
import Reply from './pages/Reply.jsx';

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import useWindowSize from './hooks/useWindowSize';

function App() {

	const size = useWindowSize();

  return (
    <Container width={size.width} height={size.height}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Write/:id" element={<Write />} />
        <Route path="/Reply/:id" element={<Reply />} />
        <Route path="/Reply/:id/ReplyWrite" element={<Write />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

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
