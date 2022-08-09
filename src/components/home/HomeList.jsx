import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../homeIcon/LikeButton';
import Chat from '../homeIcon/Chat';
import DeleteIcon from '../homeIcon/DeleteIcon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/reducer/baeReducer';
import { useSelector } from 'react-redux';

//const HomeList = ({
//  id,
 // username,
 // content,
//  createAt,
 // commentList,
//  setCommentList,
//}) => {
 // const navigate = useNavigate();
 // const _comment = useSelector((state) => state.comment)
 


const HomeList = ({ postList, setPostList, post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch;


  const handleDelete = () => {
    dispatch(deleteList(post.id));
  };


	
	// const onMoveReply = () => {
	//	navigate(`/Reply/${id}`, {
	//		state: {
	//			comment: {
	//				id: id,
	//				username: username,
	//				content: content,
	//				createAt: createAt
	//			}
	//		}
	//	});
	// } 

  // const handleDelete = () => {
  //   let dummyArray = [];
  //   postList.map((item, index) => {
  //     if (item.id === post.id) {
  //     } else {
  //       dummyArray.push(item);
  //     }
  //     setPostList(dummyArray);
  //   });
  // };


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
  // const onMoveReply = () => {
  //   navigate(`/Reply/${id}`);
  // };

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

        <UserNameDiv>{post.userName}</UserNameDiv>
        <TimeDiv>{timeCalc(post.createAt)}</TimeDiv>
      </HeaderDiv>

      <MentionDiv>{post.content}</MentionDiv>


      <BtnWrapDiv>
        <LikeButton post={post} setPostList={setPostList} postList={postList} />
        <BtnLikeDiv
        // onClick={() => {
        //   setCount(count + 1);
        // }}
        >
          {/* <div>{count}</div> */}
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
