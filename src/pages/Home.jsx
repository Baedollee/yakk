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

};

export default Home;
