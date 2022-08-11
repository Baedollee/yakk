import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { asyncLikePost, likeComment } from '../../redux/reducer/postSlice';
import KingButton from '../total/Button';

const LikeButton = ({ post }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    // dispatch(likeComment(post.id));
		dispatch(asyncLikePost(post));
  };

  return (
    <div style={{ display: 'flex' }} onClick={onClick}>
      {post.like ? (
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <KingButton id="heartFillBtn" />
          <p style={{ margin: '0' }}>좋아요!</p>
        </div>
      ) : (
        <div>
          <KingButton id="heartBtn" />
        </div>
      )}
      <div style={{ margin: '2px 0 0 0', fontSize: '15px' }}>{post.notice}</div>
    </div>
  );
};

export default LikeButton;
