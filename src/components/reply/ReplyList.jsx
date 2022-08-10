import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import KingButton from '../kingButton/Button';
import Reply from './Reply';


function ReplyList({ commentId, replyList }) {
	const navigate = useNavigate();

	const checkReply = (replyList) => {
		if (replyList.length === 0) {
			return <NoneReply>댓글이 없습니다!</NoneReply>
		} else {
			return replyList.map((item) => <Reply key={item.id} reply={item} commentId={commentId} />)
		}
	}

	return (
		<div>
			<ReplyHeader>
				<h4>댓글</h4>
				<KingButton onClick={() => navigate(`/Reply/${commentId}/ReplyWrite`)}>댓글 작성</KingButton>
			</ReplyHeader>
			{checkReply(replyList)}
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
