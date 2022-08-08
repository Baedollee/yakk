import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function HeaderReply() {
  return (
    <HeaderContainer>
      {/* <Button id="homeBtn"><img src="../public/logo512.png" /></Button> */}
      <Button id="homeBtn">홈</Button>
      <h1>Yakk</h1>
      <Button id="addBtn">추가하기</Button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 150px;
  min-width: 600px;
  padding: 0px 300px;
  background-color: aliceblue;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderReply;
