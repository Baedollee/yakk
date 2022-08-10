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
      <ListContainerDiv>
        <ListWrapDiv>
          <div>
            <span>{post.username}</span>
            <span>{timeCalc(post.createAt)}</span>
          </div>
        </ListWrapDiv>
        <User>
          <h3>{post.content}</h3>
        </User>
        <BtnWrapDiv>
          <div>
            <LikeButton post={post} />
          </div>
          <div>
            <BtnChatDiv onClick={onMoveReply}>
              <Chat />
              <span>2</span>
            </BtnChatDiv>
          </div>
          <div>
            <DeleteButton onClick={handleDelete}>
              <DeleteIcon />
            </DeleteButton>
          </div>
        </BtnWrapDiv>
      </ListContainerDiv>
    </>
  );
};

const ListContainerDiv = styled.div`
  margin-bottom: 20px;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
`;
const ListWrapDiv = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  div {
    span {
      margin-right: 10px;
    }
  }
`;

const User = styled.div`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 700;
  color: white;
`;

const BtnWrapDiv = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  div {
    margin-right: 2px;
    span {
      margin-left: 5px;
    }
  }

  /* justify-content: flex-start; */
  /* margin: 1em 0 0 0; */
`;

const BtnChatDiv = styled.div`
  display: flex;
`;
const DeleteButton = styled.button`
  /* 버튼 테크 테두리 없애주는  */
  border: none;
  background-color: #08182b;
  color: white;
  :focus {
    border: none;
    outline: none !important;
  }import { useSelector } from 'react-redux/es/exports';

`;
export default HomeList;
