import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
import { useState } from 'react';
import { useEffect } from 'react';
import { commentList } from '../redux/reducer/baeReducer';

const Home = () => {
  // const [postList, setPostList] = useState([
  //   {
  //     id: '0',
  //     userName: '배돌이',
  //     content: '비가 주륵주륵!',
  //     createAt: '5분전',
  //     like: false,
  //     notice: '',
  //   },
  //   {
  //     id: '1',
  //     userName: '배돌이',
  //     content: '비가 주륵주륵 아휴!',
  //     createAt: '10분전',
  //     like: false,
  //     notice: '',
  //   },
  // ]);

  const postList = useSelector((state) => state.baeReducer.commentList);
  console.log(postList);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <HomeHeader />

      <div>
        {postList.map((item, index) => {
          if (postList.length > 0) {
            return (
              <HomeList
                postList={postList}
                // setPostList={setPostList}
                key={`${item.id}_${item.userName}`}
                post={item}

                // id={item.id}
                // userName={item.userName}
                // content={item.content}
                // createAt={item.createAt}
              />
            );
          } else {
            alert('입력!');
          }
        })}
      </div>
    </div>
  );
};

export default Home;

// const [commentList, setCommnetList] = useState([{
//   id: ''
//   username: ''
//   title: ''
//   content: ''
//   createdAt: ''
//   }])
