import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReplyHeader from '../components/reply/ReplyHeader';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReplyList from '../components/reply/ReplyList';
import Comment from '../components/reply/Comment';

function Reply() {
	const { id } = useParams();
	console.log('reply', id);

	const location = useLocation();
	const comment = location.state.comment;
	console.log('reply', comment);

	const replyList = useSelector((state) => state.reply.replies);
	console.log('reply reducer', replyList);

  return (
		<>
			<ReplyHeader />
	    <DetailContainer>
				<Comment comment={comment}/>
				<ReplyList commentId={comment.id} replyList={replyList} />
	    </DetailContainer>
		</>
  );
}

const DetailContainer = styled.div`
  /* background-color: blueviolet; */
  height: 80%;
  min-width: 600px;
	max-width: 800px;
  margin: 30px auto;
`;

export default Reply;
