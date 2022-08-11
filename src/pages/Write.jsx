// import Header from '../components/write/Header';
import Header from '../components/total/Header';
import Form from '../components/write/Form';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { colorBlack } from '../components/color/ColorPalette';

const Write = () => {
	const { id } = useParams();
	console.log('write', id);

	const location = useLocation();
	const isPost = location.state.isPost;
	console.log(isPost);

	let replyId = '';
  if (location.state !== null) {
    replyId = location.state.replyId;
  } else {
    console.log("it's null");
  }
  
  return (
    <WriteContainer>
      {/* <Header /> */}
			<Header id="Write" />
      <Form commentId={id} replyId={replyId} isPost={isPost}/>
    </WriteContainer>
  );
};

export default Write;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  background-color: ${colorBlack};
`;
