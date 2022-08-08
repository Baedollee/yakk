import Header from '../components/write/Header';
import Form from '../components/write/Form';
import styled from 'styled-components';

const ReplyWrite = () => {
  
  return (
    <WriteContainer>
			<h1>댓글 작성 화면</h1>
      <Header />
      <Form />
    </WriteContainer>
  );
};

export default ReplyWrite;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: pink;
`;
