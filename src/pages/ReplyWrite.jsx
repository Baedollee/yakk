import Header from '../components/replyWrite/Header';
import Form from '../components/replyWrite/Form';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';

const ReplyWrite = () => {
	const { id } = useParams();
	console.log('replyWrite', id);

	const location = useLocation();
	let replyId = '';
	
	if (location.state !== null) {
		replyId = location.state.replyId;
	} else {
		console.log('it\'s null');
	}
  
  return (
    <WriteContainer>
			<h1>댓글 작성 화면</h1>
      <Header />
      <Form commentId={id} replyId={replyId}/>
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
