import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { colorPink1 } from '../color/ColorPalette';
import KingButton from '../kingButton/Button';

function ReplyHeader() {
  const navigate = useNavigate();

  const onMoveHome = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <HeaderLayout>
        {/* <KingButton id="homeBtn"><img src="../public/logo512.png" /></KingButton> */}
        <KingButton id="homeBtn" onClick={onMoveHome}>
          홈
        </KingButton>
        <h1>YAKK</h1>
        <KingButton id="addBtn" onClick={() => navigate('/Write', { state: { isPost: true }})}>
          추가하기
        </KingButton>
      </HeaderLayout>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 150px;
  background-color: ${colorPink1};

  display: flex;
  justify-content: center;
`;

const HeaderLayout = styled.div`
  min-width: 600px;

	max-width: 800px;
	width: 100%;
	margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ReplyHeader;
