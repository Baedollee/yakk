import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../homeIcon/LikeButton';
import Chat from '../homeIcon/Chat';
import DeleteIcon from '../homeIcon/DeleteIcon';

const HomeList = ({ id, userName, content, createAt, commentList }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    let dummyArray = [];
    commentList.map((item, index) => {
      if (item.content === content) {
      } else {
        dummyArray.push(item);
      }
      commentList = dummyArray;
    });
  };

  return (
    <TextListDiv>
      <HeaderDiv>
        <UserNameDiv>{userName}</UserNameDiv>
        <TimeDiv>{createAt}</TimeDiv>
      </HeaderDiv>

      <MentionDiv>{content}</MentionDiv>

      <BtnWrapDiv>
        <BtnLikeDiv>
          <LikeButton />

          <div>1</div>
        </BtnLikeDiv>
        <BtnChatDiv
          onClick={() => {
            navigate('/Reply');
          }}>
          <Chat />
          <div>2</div>
        </BtnChatDiv>
        <DeleteDiv onClick={handleDelete}>
          <DeleteIcon />
        </DeleteDiv>
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
const DeleteDiv = styled.div``;
export default HomeList;
