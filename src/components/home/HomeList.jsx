import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../homeIcon/LikeButton';
import Chat from '../homeIcon/Chat';
import DeleteIcon from '../homeIcon/DeleteIcon';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const HomeList = ({
  id,
  username,
  content,
  createAt,
  commentList,
  setCommentList,
}) => {
  const navigate = useNavigate();
  const _comment = useSelector((state) => state.comment)
  console.log('1:',_comment, '2:',_comment.comment)

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
					username: username,
					content: content,
					createAt: createAt
				}
			}
		});
	}

  const [count, setCount] = useState(0);

  const [likeButton, setLikeButton] = useState({ like: 0 });

  // console.log(likeButton.count);
  return (
    <>
    <div style={{backgroundColor: 'pink'}}>
      {
        _comment.commentList.map( a => (
          <p>
          작성자: {a.username}
          내용 : {a.content}
          </p>
        ))
      }
      </div>
    <TextListDiv>
      <HeaderDiv>
        <User>{username}</User>
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
