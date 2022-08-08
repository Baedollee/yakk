import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../homeIcon/LikeButton';
import Chat from '../homeIcon/Chat';
import DeleteIcon from '../homeIcon/DeleteIcon';

const TextList = () => {
  const navigate = useNavigate();

  return (
    <TextListDiv>
      <HeaderDiv>
        <UserNameDiv>배성열</UserNameDiv>
        <TimeDiv>10분전</TimeDiv>
      </HeaderDiv>

      <MentionDiv>비가 무슨 동남아처럼 내리네!!!!</MentionDiv>

      <BtnWrapDiv>
        <BtnLikeDiv>
          <LikeButton />
          <button>하트</button>
          <div>1</div>
        </BtnLikeDiv>
        <BtnChatDiv>
          <Chat />
          <button
            onClick={() => {
              navigate('/Reply');
            }}>
            채팅
          </button>
          <div>2</div>
        </BtnChatDiv>
        <DeleteIcon />
        <DeleteDiv>휴지통</DeleteDiv>
      </BtnWrapDiv>
    </TextListDiv>
  );
};

const TextListDiv = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 50px;
`;
const HeaderDiv = styled.div`
  display: flex;
`;
const UserNameDiv = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: red;
`;
const TimeDiv = styled.div`
  margin: 5px;
  font-size: 3px;
  color: red;
`;
const MentionDiv = styled.div`
  margin-top: 7px;
  font-size: 15px;
`;
const BtnWrapDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1em 0 0 0;
`;
const BtnLikeDiv = styled.div`
  display: flex;
`;
const BtnChatDiv = styled.div`
  display: flex;
`;
const DeleteDiv = styled.button``;
export default TextList;
