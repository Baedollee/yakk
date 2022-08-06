import React from 'react';
<<<<<<< HEAD:src/page/home.jsx

const Home = () => {
  return;
  <div>홈</div>;
=======
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import TextList from '../components/home/TextList';
const Home = () => {
  //   const contentsList = useSelector((state) => {
  //     return state.listReducer.list;
  //   });
  return (
    <div>
      <HomeHeader />
      <TextList />
      <TextList />
    </div>
  );
>>>>>>> 99f8f8a8f60b006fa5861db2ca33c443a397e424:src/pages/Home.jsx
};

export default Home;
