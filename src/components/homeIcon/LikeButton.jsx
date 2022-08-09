import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const LikeButton = ({ post, setPostList, postList }) => {
  const onClick = () => {
    let dummyList = [];
    postList.map((item, index) => {
      if (item.id === post.id) {
        if (item.like === true) {
          dummyList.push({ ...item, like: false, notice: '' });
        } else {
          dummyList.push({ ...item, like: true, notice: '좋아요!' });
        }
      } else {
        dummyList.push(item);
      }
      setPostList(dummyList);
    });
  };

  return (
    <div style={{ display: 'flex' }} onClick={onClick}>
      {post.like ? (
        <HeartFilled style={{ color: 'red', fontSize: '20px' }} />
      ) : (
        <HeartOutlined style={{ fontSize: '20px' }} />
      )}
      <div style={{ margin: '2px 0 0 0', fontSize: '15px' }}>{post.notice}</div>

      {/* <HeartFilled
        style={{ color: 'red', fontSize: '20px' }}
        onclick={likeHandler}
      />
      <HeartOutlined style={{ fontSize: '20px' }} onclick={likeHandler} /> */}
      {/* <h3>{likeButton.count}</h3> */}
    </div>
  );
};

export default LikeButton;
