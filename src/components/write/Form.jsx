import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';
import { colorBlack } from '../color/ColorPalette';
import Header from '../total/Header';

import InputBox from './InputBox';

const Form = ({ commentId, replyId, isPost }) => {
  const url = process.env.REACT_APP_URL;

  const comment = useSelector((state) => state.comment.commentList);

  const [commentList, setCommentList] = useState({
    username: '',
    content: '',
  });

  const [replyList, setReplyList] = useState({
    username: '',
    content: '',
    postId: commentId,
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCommentList({
      ...commentList,
      [name]: value,
    });
  };

  const onReplyChangeHandler = (e) => {
    const { value, name } = e.target;
    setReplyList({
      ...replyList,
      [name]: value,
    });
  };

  return (
    <StForm>
      <Header id="Write" />
      <InputBox
        _comment={comment}
        commentList={commentList}
        onchangeHandler={onChangeHandler}
        commentId={commentId}
        setCommentList={setCommentList}
        url={url}
        replyList={replyList}
        setReplyList={setReplyList}
        onReplyChangeHandler={onReplyChangeHandler}
        replyId={replyId}
        isPost={isPost}
      />
    </StForm>
  );
};

export default Form;

const StForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  background-color: ${colorBlack};
`;
