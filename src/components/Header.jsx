import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from './HomeIcon';
import WriteIcon from './WriteIcon';

const Header = () => {
  let navigate = useNavigate();
  return (
    <ContainerDiv>
      <HomeIcon />
      <div
        onClick={() => {
          navigate('/');
        }}>
        home
      </div>
      <div>yakk</div>
      <WriteIcon />
      <div
        onClick={() => {
          navigate('/Write');
        }}>
        write
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
  padding: 0 20px;
`;
export default Header;
