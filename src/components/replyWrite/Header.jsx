import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HaaderLogo
        onClick={() => {
          navigate('../');
        }}>
        YAKK
      </HaaderLogo>
    </>
  );
};

export default Header;

const HaaderLogo = styled.h1`
  font-size: 3.6em;

  color: #fff;
  text-shadow: 1px 3px 3px gray;

  cursor: pointer;
`;
