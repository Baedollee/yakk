import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const contentsList = useSelector((state) => {
    return state.listReducer.list;
  });
  console.log(contentsList.title);
  return (
    <div>
      <div>홈</div>
    </div>
  );
};

export default Home;
