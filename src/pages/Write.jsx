import Header from '../components/write/Header';
import Form from '../components/write/Form';
import styled from 'styled-components';

const Write = () => {
  return (
    <WriteContainer>
      <Header />
      <Form />
    </WriteContainer>
  );
};

export default Write;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: pink;
`;
