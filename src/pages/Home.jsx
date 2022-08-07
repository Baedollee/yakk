import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HomeHeader from '../components/home/HomeHeader';
import HomeList from '../components/home/HomeList';
const Home = () => {
  //   const contentsList = useSelector((state) => {
  //     return state.listReducer.list;
  //   });
  return (
    <div>
      <HomeHeader />
      <HomeList />
      <HomeList />
    </div>
  );
};

export default Home;
