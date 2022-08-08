import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ReplyHeader from '../components/reply/ReplyHeader';
import { useLocation, useParams } from 'react-router-dom';
import ReplyList from '../components/reply/ReplyList';
import Comment from '../components/reply/Comment';

function Reply() {
	const { id } = useParams();
	const location = useLocation();
	const comment = location.state.comment;
	console.log('reply', id, comment);

	const replyList = useSelector((state) => state.reply.replies);
	console.log('reply reducer', replyList);
	
	const findReplyList = replyList.filter((item) => item.commentId === comment.id);
	console.log(findReplyList);

  return (
		<>
			<ReplyHeader />
	    <DetailContainer>
				<Comment comment={comment} replyLength={findReplyList.length}/>
				<ReplyList replyList={findReplyList} />
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
