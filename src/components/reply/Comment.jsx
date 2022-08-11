import React from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRemovePost, removeComment } from '../../redux/reducer/postSlice';
import { colorWhite, colorPink2 } from '../color/ColorPalette';
import KingButton from '../total/Button';
import LikeButton from '../homeIcon/LikeButton';

function Comment({ comment, replyLength }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const onRemoveCommentHandler = (commentId) => {

    // dispatch(removeComment(commentId));
    dispatch(asyncRemovePost(commentId));
    alert('글이 삭제되었습니다.');
    navigate(-1);
  };

  const onMoveWriteHandler = () => {
    navigate(`/Write/${comment.id}`, {
      state: { commentId: comment.id, isPost: true },
    });
  };

  return (
    <Content>
      <ContentHeader>
        <div>
          <span>{comment.username}</span>
          <span>{timeCalc(comment.createAt)}</span>
        </div>
        <BtnContainer>
          <KingButton onClick={onMoveWriteHandler}>수정하기</KingButton>
          <KingButton onClick={() => onRemoveCommentHandler(comment.id)}>
            삭제하기
          </KingButton>
        </BtnContainer>
      </ContentHeader>
      <p>{comment.content}</p>
      <ContentFooter>
        <ContentComment>
					<LikeButton post={comment}/>
          <CommentOutlined style={{fontSize: '20px'}}/>
          <span>{replyLength}</span>
        </ContentComment>
      </ContentFooter>
    </Content>
  );
}

const Content = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${colorWhite};
  border-radius: 10px;

  p {
    margin: 20px;
    word-break: normal;
  }
`;

const ContentHeader = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;

  div {
    span {
      margin-right: 30px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

const ContentFooter = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const ContentComment = styled.div`
	display: flex;
	align-items: center;

	* {
		margin-right: 2px;
	}
`;

export default Comment;
