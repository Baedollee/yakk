import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReplyHeader from '../components/reply/ReplyHeader';
import { useLocation, useParams } from 'react-router-dom';
import ReplyList from '../components/reply/ReplyList';
import Comment from '../components/reply/Comment';
import { getComment } from '../redux/reducer/baeReducer';
import { colorBlack, colorWhite } from '../components/color/ColorPalette';

function Reply() {
	const { id } = useParams();
	const dispatch = useDispatch();
	console.log('reply', id);

	// comment by reducer
	const comment = useSelector((state) => state.comment.comment);
	console.log('comment reducer', comment);

	useEffect(() => {
		dispatch(getComment(id));
	}, [comment]);

	// comment by parameter
	// const location = useLocation();
	// const comment = location.state.comment;
	// console.log('reply', id, comment);

	const replyList = useSelector((state) => state.reply.replyList);
	const findReplyList = replyList.filter((item) => item.commentId === comment.id);
	// console.log(findReplyList);

  return (
		<ReplyContainer>
			<ReplyHeader />
	    <DetailContainer>
				<Comment comment={comment} replyLength={findReplyList.length}/>
				<ReplyList commentId={comment.id} replyList={findReplyList} />
	    </DetailContainer>
		</ReplyContainer>
  );
}

const ReplyContainer = styled.div`
	height: 100vh;
	background-color: ${colorBlack};
	color: ${colorWhite};
`;

const DetailContainer = styled.div`
  /* background-color: blueviolet; */
  height: 80%;
  min-width: 600px;
  max-width: 800px;
  margin: 30px auto;
`;

export default Reply;
