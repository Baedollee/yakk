import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeReply } from '../../redux/reducer/rangReducer';
import ReplyButton from './ReplyButton';

function Reply(props) {
  // console.log('reply one', props);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemoveReplyHandler = (replyId) => {
    dispatch(removeReply(replyId));
  };

  return (
    <Content>
      <ContentHeader>
        <div>
          <span>{props.reply.userName}</span>
          <span>{props.reply.createAt}</span>
        </div>
        <BtnContainer>
          <ReplyButton onClick={() => navigate('/ReplyWrite')}>
            수정하기
          </ReplyButton>
          <ReplyButton onClick={() => onRemoveReplyHandler(props.reply.id)}>
            삭제하기
          </ReplyButton>
        </BtnContainer>
      </ContentHeader>
      <p>{props.reply.content}</p>
    </Content>
  );
}

const Content = styled.div`
  margin-bottom: 20px;
  /* background-color: beige; */
  border: 1px solid black;
  border-radius: 10px;

  p {
    margin: 20px;
    /* background-color: aliceblue; */
    word-break: normal;
  }
`;

const ContentHeader = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;

  div {
    span {
      margin-right: 30px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

export default Reply;
