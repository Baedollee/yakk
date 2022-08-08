import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const LikeButton = ({ likeButton, setLikeButton }) => {
  onclick = () => {
    if (likeButton.checked) {
      setLikeButton({ checked: false, count: '' });
    } else {
      setLikeButton({ checked: true, count: '좋아요1회' });
    }
  };

  return (
    <div>
      {likeButton.checked ? (
        <HeartFilled
          style={{ color: 'red', fontSize: '20px' }}
          onclick={LikeButton.onclick}
        />
      ) : (
        <HeartOutlined
          style={{ fontSize: '20px' }}
          onclick={LikeButton.onclick}
        />
      )}
      {/* <HeartFilled
        style={{ color: 'red', fontSize: '20px' }}
        onclick={likeHandler}
      />
      <HeartOutlined style={{ fontSize: '20px' }} onclick={likeHandler} /> */}
    </div>
  );
};

export default LikeButton;
