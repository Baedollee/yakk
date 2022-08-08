import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '../homeIcon/HomeIcon';
import WriteIcon from '../homeIcon/WriteIcon';

const HomeHeader = () => {
  let navigate = useNavigate();
  return (
    <ContainerDiv>
      <div
        onClick={() => {
          navigate('/');
        }}>
        <HomeIcon />
      </div>

      <div>yakk</div>

      <div
        onClick={() => {
          navigate('/Write');
        }}>
        <WriteIcon />
      </div>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 5em;
  justify-content: space-between;
  padding: 0 3em;
`;
export default HomeHeader;
