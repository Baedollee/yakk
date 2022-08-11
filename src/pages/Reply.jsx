import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import ReplyList from '../components/reply/ReplyList';
import Comment from '../components/reply/Comment';

import { asyncGetPost, getComment } from '../redux/reducer/postSlice';
import { asyncGetPostReply } from '../redux/reducer/replySlice';
import { colorBlack, colorWhite } from '../components/color/ColorPalette';
import Header from '../components/total/Header';

function Reply() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // comment by reducer
  const comment = useSelector((state) => state.comment.comment);

  // comment by parameter
  // const location = useLocation();
  // const comment = location.state.comment;

  const replyList = useSelector((state) => state.reply.replyList);
  // const findReplyList = replyList.filter((item) => item.commentId === comment.id);

  useEffect(() => {
    // dispatch(getComment(id));
    dispatch(asyncGetPost(id));
    dispatch(asyncGetPostReply(id));
  }, [JSON.stringify(comment), JSON.stringify(replyList)]);

  return (
    <ReplyContainer>
      {/* <ReplyHeader /> */}
      <Header id="Reply" />
      <DetailContainer>
        <Comment comment={comment} replyLength={replyList.length} />
        <ReplyList commentId={comment.id} replyList={replyList} />
      </DetailContainer>
    </ReplyContainer>
  );
}

const ReplyContainer = styled.div`
  min-height: 100vh;
  background-color: ${colorBlack};
  color: ${colorWhite};
`;

const DetailContainer = styled.div`
  /* background-color: blueviolet; */
  height: 80%;
  min-width: 600px;
  max-width: 800px;
  margin: 30px auto;
`;

export default Reply;
