import React from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ReplyButton from './ReplyButton';
import { useDispatch } from 'react-redux';
import { removeComment } from '../../redux/reducer/baeReducer';


function Comment({ comment, replyLength }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log(comment);
	
  const timeCalc = (date) => {
    let today = new Date();
    date = new Date(date);

    let time = (today.getTime() - date.getTime()) / 1000 / 60; // min
    if (time < 1) return '방금 전';
    if (time < 60) return parseInt(time) + '분 전';
    time /= 60; // hour
    if (time < 24) return parseInt(time) + '시간 전';
    time /= 24; // day
    return parseInt(time) + '일 전';
  };

	const onRemoveCommentHandler = (commentId) => {
		console.log('remove comment', commentId);
		dispatch(removeComment(commentId));
		alert('글이 삭제되었습니다.');
		navigate(-1);
	}

	return (
		<Content>
			<ContentHeader>
				<div>
					<span>{comment.username}</span>
					<span>{timeCalc(comment.createAt)}</span>
				</div>
				<BtnContainer>
					<ReplyButton onClick={() => navigate(`/Write/${comment.id}`)}>수정하기</ReplyButton>
					<ReplyButton onClick={() => onRemoveCommentHandler(comment.id)}>삭제하기</ReplyButton>
				</BtnContainer>
			</ContentHeader>
			<p>{comment.content}</p>
			<ContentFooter>
				<ContentComment>
					<CommentOutlined />
					<span>{replyLength}</span>
					<HeartOutlined />
					{/* <HeartFilled /> */}
					<span>10</span>
				</ContentComment>
			</ContentFooter>
		</Content>
	)

}

const Content = styled.div`
  margin-bottom: 20px;
  /* background-color: beige; */
  border: 1px solid black;
  border-radius: 10px;

  p {
    margin: 20px;
    /* border: 1px solid black; */
    /* background-color: aliceblue; */
    word-break: normal;
  }
`;

const ContentHeader = styled.div`
  margin: 20px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;

  div {
    span {
      /* background-color: coral; */
      margin-right: 30px;
    }

    button {
      margin-left: 30px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

const ContentFooter = styled.div`
  margin: 20px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
`;

const ContentComment = styled.div`
  button {
    margin-right: 10px;
  }

  span {
    /* background-color: coral; */
    margin-right: 10px;
  }
`;

export default Comment;
