import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colorPink1 } from '../color/ColorPalette'


const Header = () => {
  const navigate = useNavigate();
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
};

export default Header;

const HaaderLogo = styled.h1`
  text-align:center;
  margin:auto 0;

  color: #fff;
  /* text-shadow: 1px 3px 3px gray; */

  cursor: pointer;
`;
const StHeader = styled.div`
  width: 100vw;
  height: 150px;
  min-height:150px;
  background-color: ${colorPink1};

  display: flex;
  flex-direction:row;
  align-content:center;
  justify-content: center;
`