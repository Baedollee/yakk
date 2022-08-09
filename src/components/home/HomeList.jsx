import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../homeIcon/LikeButton';
import Chat from '../homeIcon/Chat';
import DeleteIcon from '../homeIcon/DeleteIcon';
import { useDispatch } from 'react-redux';
import { removeComment } from '../../redux/reducer/baeReducer';

const HomeList = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeComment(post.id));
  };

  const onMoveReply = () => {
    navigate(`/Reply/${post.id}`, {
      state: {
        comment: {
          id: post.id,
          userName: post.userName,
          content: post.content,
          createAt: post.createAt,
        },
      },
    });
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
    <>
      <TextListDiv>
        <MentionDiv>
          <h3>{post.username}</h3>

          <TimeDiv>{timeCalc(post.createAt)}</TimeDiv>
        </MentionDiv>
        <User>
          <h3>{post.content}</h3>
        </User>

        <BtnWrapDiv>
          <LikeButton post={post} />
          <BtnChatDiv onClick={onMoveReply}>
            <Chat />
            <div>2</div>
          </BtnChatDiv>
          <DeleteButton onClick={handleDelete}>
            <DeleteIcon />
          </DeleteButton>
        </BtnWrapDiv>
      </TextListDiv>
    </>
  );
};

const TextListDiv = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 50px;
`;
const HeaderDiv = styled.div`
  display: flex;
`;
const User = styled.div`
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
  /* justify-content: flex-start; */
  /* margin: 1em 0 0 0; */
`;
const BtnLikeDiv = styled.div`
  display: flex;
`;
const BtnChatDiv = styled.div`
  display: flex;
`;
const DeleteButton = styled.button`
  border: none;
  background-color: white;
  :focus {
    border: none;
    outline: none !important;
  }
`;
export default HomeList;
