import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './ReplyButton';
import { EditOutlined } from '@ant-design/icons';

function ReplyHeader() {
	const navigate = useNavigate();

	const onMoveHome = () => {
		console.log('reply click home');
		navigate(-1);
	}

  return (
    <HeaderContainer>
			<HeaderLayout>
	      {/* <Button id="homeBtn"><img src="../public/logo512.png" /></Button> */}
	      <Button id="homeBtn" onClick={onMoveHome}>홈</Button>
	      <h1>Yakk</h1>
	      <Button id="addBtn" onClick={() => navigate('/Write')}>추가하기</Button>
			</HeaderLayout>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 150px;
  background-color: aliceblue;

	display: flex;
	justify-content: center;
`;

const HeaderLayout = styled.div`
  min-width: 600px;
	max-width: 800px;
	width: 100%;
	margin: auto 200px;

	display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ReplyHeader;
