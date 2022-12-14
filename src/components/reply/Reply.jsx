import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { asyncRemoveReply, removeReply } from '../../redux/reducer/replySlice';
import { colorWhite } from '../color/ColorPalette';
import KingButton from '../total/Button';
import { asyncMinusReplyNum } from '../../redux/reducer/postSlice';

function Reply({ commentId, reply }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onMoveReplyWrite = () => {
    navigate(`/Reply/${commentId}/ReplyWrite`, {
      state: { replyId: reply.id, isPost: false },
    });
  };

  const onRemoveReplyHandler = (replyId) => {

    // dispatch(removeReply(replyId));
    dispatch(asyncRemoveReply(replyId));
    dispatch(asyncMinusReplyNum(commentId));
  };

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

  return (
    <Content>
      <ContentHeader>
        <div>
          <span>{reply.username}</span>
          <span>{timeCalc(reply.createAt)}</span>
        </div>
        <BtnContainer>
          <KingButton onClick={onMoveReplyWrite}>수정하기</KingButton>
          <KingButton onClick={() => onRemoveReplyHandler(reply.id)}>
            삭제하기
          </KingButton>
        </BtnContainer>
      </ContentHeader>
      <p>{reply.content}</p>
    </Content>
  );
}

const Content = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${colorWhite};
  border-radius: 10px;

  p {
    margin: 20px;
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
