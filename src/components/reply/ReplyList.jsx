import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Reply from './Reply';
import ReplyButton from './ReplyButton';

function ReplyList(props) {
	const navigate = useNavigate();

	console.log('replyList', props);
	const replyList = props.replyList;
	console.log(replyList);
	console.log(replyList.length);

	const findReplyList = replyList.filter((item) => item.commentId === props.commentId);

	const checkReply = (replyList) => {
		if (replyList.length === 0) {
			return <NoneReply>댓글이 없습니다!</NoneReply>
		} else {
			return replyList.map((item) => <Reply key={item.id} reply={item} />)
		}
	}

	return (
		<div>
			<ReplyHeader>
				<h4>댓글</h4>
				<ReplyButton onClick={() => navigate('/ReplyWrite')}>댓글 작성</ReplyButton>
			</ReplyHeader>
			{checkReply(findReplyList)}
		</div>
	)
}

const ReplyHeader = styled.div`
  margin: 20px;
	
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		height: 100%;
	}
`;

const NoneReply = styled.p`
	text-align: center;
`;

export default ReplyList;