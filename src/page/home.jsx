import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import TextList from '../components/TextList';
const Home = () => {
  //   const contentsList = useSelector((state) => {
  //     return state.listReducer.list;
  //   });
  return (
    <div>
      <Header />
      <TextList />
      <TextList />
    </div>
  );
};

export default Home;
