import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '../homeIcon/HomeIcon';
import WriteIcon from '../homeIcon/WriteIcon';
import { colorPink1 } from '../color/ColorPalette';

const HomeHeader = () => {
  let navigate = useNavigate();
  return (
    <ContainerDiv>
      <WrapDiv>
        <div
          onClick={() => {
            navigate('/');
          }}>
          <HomeIcon />
        </div>

        <h1>YAKK</h1>

        <div
          onClick={() => {
            navigate('/Write', { state: { isPost: true } });
          }}>
          <WriteIcon />
        </div>
      </WrapDiv>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  height: 6rem;

  background-color: ${colorPink1};

  display: flex;
  justify-content: center;
`;

const WrapDiv = styled.div`
  min-width: 600px;

  max-width: 800px;
  width: 100%;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default HomeHeader;
