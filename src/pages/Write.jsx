import Header from '../components/write/Header';
import Form from '../components/write/Form';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Write = () => {
	const { id } = useParams();
	console.log('write', id);
  
  return (
    <WriteContainer>
      <Header />
      <Form commentId={id}/>
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
