import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const LikeButton = ({ likeButton, setLikeButton, count, setCount }) => {
  onclick = () => {
    if (likeButton.like === '') {
      setLikeButton({ like: likeButton.like + 1 });
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      {likeButton.like !== 0 ? (
        <HeartFilled
          style={{ color: 'red', fontSize: '20px' }}
          onClick={LikeButton}
        />
      ) : (
        <HeartOutlined style={{ fontSize: '20px' }} onClick={LikeButton} />
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
