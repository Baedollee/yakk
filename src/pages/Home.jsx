import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {
  //   const contentsList = useSelector((state) => {
  //     return state.listReducer.list;
  //   });
  const [commentList, setCommentList] = useState([
    {
      id: '0',
      userName: '배돌이',
      // title: '',
      content: '비가 주륵주륵!',
      createAt: '5분전',
    },
    {
      id: '1',
      userName: '배돌이',
      // title: '',
      content: '비가 주륵주륵 아휴!',
      createAt: '5분전',
    },
  ]);

  const [like, setLike] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <HomeHeader />

      <div>
        {commentList.map((item, index) => {
          if (commentList.length > 0) {
            return (
              <HomeList
                commentList={commentList}
                setCommentList={setCommentList}

                key={`${item.id}_${item.userName}`}
                id={item.id}
                userName={item.userName}
                // title={item.title}
                content={item.content}
                createAt={item.createAt}
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
