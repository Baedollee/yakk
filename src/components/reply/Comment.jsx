import React from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ReplyButton from './ReplyButton';

function Comment(props) {
	console.log('comment', props);
	const navigate = useNavigate();

	return (
		<Content>
			<ContentHeader>
				<div>
					<span>{props.comment.userName}</span>
					<span>{props.comment.createAt}</span>
				</div>
				<BtnContainer>
					<ReplyButton onClick={() => navigate('/Write')}>수정하기</ReplyButton>
					<ReplyButton>삭제하기</ReplyButton>
				</BtnContainer>
			</ContentHeader>
			<p>{props.comment.content}</p>
			<ContentFooter>
				<ContentComment>
					<CommentOutlined />
					<span>{props.replyLength}</span>
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
