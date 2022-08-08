import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
import { useState } from 'react';
const Home = () => {
  //   const contentsList = useSelector((state) => {
  //     return state.listReducer.list;
  //   });
  const [commentList, setCommentList] = useState([
    {
      id: '',
      userName: '배돌이',
      // title: '',
      content: '비가 주륵주륵!',
      createAt: '5분전',
    },
  ]);

  return (
    <div>
      <HomeHeader />

      <div>
        {commentList.map((item, index) => {
          // if (item.id === id)
          return (
            <HomeList
              commentList={commentList}
              key={item.id}
              id={item.id}
              userName={item.userName}
              // title={item.title}
              content={item.content}
              createAt={item.createAt}
            />
          );
        })}
      </div>

      <HomeList />
    </div>
  );
};

export default Home;
