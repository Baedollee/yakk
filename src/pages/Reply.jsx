import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import ReplyHeader from '../components/reply/ReplyHeader';
import ReplyList from '../components/reply/ReplyList';
import Comment from '../components/reply/Comment';

import { asyncGetPost, getComment } from '../redux/reducer/baeReducer';
import { asyncGetPostReply } from '../redux/reducer/rangReducer';
import { colorBlack, colorWhite } from '../components/color/ColorPalette';
import Header from '../components/total/Header';

function Reply() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log('reply', id);

  // comment by reducer
  const comment = useSelector((state) => state.comment.comment);
  // console.log('comment reducer', comment);

  // comment by parameter
  // const location = useLocation();
  // const comment = location.state.comment;
  // console.log('reply', id, comment);

  const replyList = useSelector((state) => state.reply.replyList);
  // const findReplyList = replyList.filter((item) => item.commentId === comment.id);
  // console.log(findReplyList);
  // console.log(replyList, JSON.parse(JSON.stringify(replyList)));

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
