import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../homeIcon/LikeButton';
import Chat from '../homeIcon/Chat';
import DeleteIcon from '../homeIcon/DeleteIcon';
import { useState } from 'react';

const HomeList = ({
  id,
  userName,
  content,
  createAt,

  comment,

  commentList,
  setCommentList,
}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    let dummyArray = [];
    commentList.map((item, index) => {
      if (item.id === id) {
      } else {
        dummyArray.push(item);
      }
      setCommentList(dummyArray);
    });
  };

	
	const onMoveReply = () => {
		navigate(`/Reply/${id}`, {
			state: {
				comment: {
					id: id,
					userName: userName,
					content: content,
					createAt: createAt
				}
			}
		});
	}

  const [count, setCount] = useState(0);

  const [likeButton, setLikeButton] = useState({ like: 0 });

  const onMoveReply = () => {
    navigate(`/Reply/${comment.id}`, {
      state: {
        comment: comment,
      },
    });
  };
  // console.log(likeButton.count);
  return (
    <TextListDiv>
      <HeaderDiv>
        <UserNameDiv>{userName}</UserNameDiv>
        <TimeDiv>{createAt}</TimeDiv>
      </HeaderDiv>

      <MentionDiv>{content}</MentionDiv>

      <BtnWrapDiv>
        <BtnLikeDiv
        // onClick={() => {
        //   setLike(like + 1);
        // }}
        >
          <LikeButton
            likeButton={likeButton}
            setLikeButton={setLikeButton}
            count={count}
            setCount={setCount}
          />
          <div>{count}</div>
        </BtnLikeDiv>
        <BtnChatDiv onClick={onMoveReply}>
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
