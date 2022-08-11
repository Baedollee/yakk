import styled from 'styled-components';

import InputWriter from './InputWriter';
import InputContent from './InputContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import KingButton from '../total/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorPink1, colorWhite } from '../color/ColorPalette';
import { asyncGetPost, getComment } from '../../redux/reducer/postSlice';
import { asyncGetOneReply } from '../../redux/reducer/replySlice';

const InputBox = ({
  _comment,
  commentList,
  onchangeHandler,
  commentId,
  setCommentList,
  url,
  replyList,
  setReplyList,
  onReplyChangeHandler,
  replyId,
  isPost,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const comment = useSelector((item) => item.comment.comment);
  const [isEdit, setIsEdit] = useState({ post: false, reply: false });

  const reply = useSelector((item) => item.reply.reply);

  useEffect(() => {
    if (commentId !== undefined) {
      // dispatch(getComment(commentId));
      dispatch(asyncGetPost(commentId));
      setCommentList({
        ...comment,
        username: comment.username,
        content: comment.content,
      });
      setIsEdit({ ...isEdit, post: true });
    }

    if (replyId !== undefined) {
      // dispatch(getReply(replyId));
      dispatch(asyncGetOneReply(replyId));
      setReplyList({
        ...reply,
        username: reply.username,
        content: reply.content,
      });
      setIsEdit({ ...isEdit, reply: true });
    }

    if (isPost) console.log('finish get comment', comment);
    else console.log('finish get reply', reply);
  }, [JSON.stringify(comment), JSON.stringify(reply)]);

  return (
    <InputBoxContainer>
      <KingButton
        id="backBtn"
        style={{ fontSize: '2em', cursor: 'pointer', marginRight: '85%' }}
        onClick={() => {
          navigate(-1);
        }}
      />
      <InputWriter
        onchangeHandler={isPost ? onchangeHandler : onReplyChangeHandler}
        username={isPost ? commentList.username : replyList.username}
        isEdit={isPost ? isEdit.post : isEdit.reply}
      />
      <InputContent
        onchangeHandler={isPost ? onchangeHandler : onReplyChangeHandler}
        content={isPost ? commentList.content : replyList.content}
        isEdit={isPost ? isEdit.post : isEdit.reply}
      />
      <Button
        _comment={_comment}
        commentList={commentList}
        setCommentList={setCommentList}
        replyList={replyList}
        isEdit={isEdit}
        isPost={isPost}
        url={url}
      />
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  margin-top: 30px;
  width: 800px;
  height: 600px;

  background: none;

  border: 2px solid ${colorWhite};
  border-radius: 15px;

  /* box-shadow: 10px 10px 10px gray; */
`;
