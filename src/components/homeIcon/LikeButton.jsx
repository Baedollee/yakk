import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { likeComment } from '../../redux/reducer/baeReducer';

const LikeButton = ({ post }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(likeComment(post.id));
  };

  return (
    <div style={{ display: 'flex' }} onClick={onClick}>
      {post.like ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <HeartFilled style={{ color: 'red', fontSize: '20px' }} />
          <p>좋아요</p>
        </div>
      ) : (
        <div>
          <HeartOutlined style={{ fontSize: '20px' }} />
        </div>
      )}
      <div style={{ margin: '2px 0 0 0', fontSize: '15px' }}>{post.notice}</div>
    </div>
  );
};

export default LikeButton;
