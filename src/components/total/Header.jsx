import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '../homeIcon/HomeIcon';
import WriteIcon from '../homeIcon/WriteIcon';
import { colorPink1 } from '../color/ColorPalette';
import KingButton from '../total/Button';

const Header = (props) => {
  let navigate = useNavigate();

	if (props.id === 'Home') {
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
							navigate('/Write', { state: { isPost: true }});
						}}>
						<WriteIcon />
					</div>
				</WrapDiv>
			</ContainerDiv>
		);
	} else if (props.id === 'Write') {
		return (
			<StHeader>
				<HaaderLogo
					onClick={() => {
						navigate('../');
					}}>
					YAKK
				</HaaderLogo>
			</StHeader>
		);
	} else if (props.id === 'Reply') {
		return (
			<HeaderContainer>
				<HeaderLayout>
					{/* <KingButton id="homeBtn"><img src="../public/logo512.png" /></KingButton> */}
					<KingButton id="homeBtn" onClick={() => navigate(-1)}>
						홈
					</KingButton>
					<h1 onClick={() => navigate('/')}>YAKK</h1>
					<KingButton id="addBtn" onClick={() => navigate('/Write', { state: { isPost: true }})}>
						추가하기
					</KingButton>
				</HeaderLayout>
			</HeaderContainer>
		);
	}	
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


const HaaderLogo = styled.h1`
  text-align:center;
  margin:auto 0;

  color: #fff;
  /* text-shadow: 1px 3px 3px gray; */

  cursor: pointer;
`;

const StHeader = styled.div`
  width: 100vw;
  height: 6rem;
  /* height: 150px; */
  min-height:6rem;
  background-color: ${colorPink1};

  display: flex;
  flex-direction:row;
  align-content:center;
  justify-content: center;
`

const HeaderContainer = styled.div`
  height: 6rem;
  /* height: 150px; */
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


export default Header;
