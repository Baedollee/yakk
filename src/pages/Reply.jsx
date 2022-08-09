import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReplyHeader from '../components/reply/ReplyHeader';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReplyList from '../components/reply/ReplyList';
import Comment from '../components/reply/Comment';

function Reply(props) {
  const { id } = useParams();
  // console.log('reply', id);

  const location = useLocation();
  const comment = location.state.comment;
  // console.log('reply', comment);

  const replyList = useSelector((state) => state.reply.replies);
  // console.log('reply reducer', replyList);
  // console.log(replyList.length);

  // console.log(props);

  const findReplyList = replyList.filter(
    (item) => item.commentId === comment.id
  );
  // console.log(findReplyList);

  return (
    <>
      <ReplyHeader />
      <DetailContainer>
        <Comment comment={comment} replyLength={findReplyList.length} />
        <ReplyList replyList={findReplyList} />
      </DetailContainer>
    </>
  );
}

const DetailContainer = styled.div`
  /* background-color: blueviolet; */
  height: 80%;
  min-width: 600px;
  max-width: 800px;
  margin: 30px auto;
`;

export default Reply;
