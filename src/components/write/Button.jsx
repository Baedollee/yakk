import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getUsername } from '../../redux/modules/write';


const Button = ({ addComment, username }) => {
  const distpatch = useDispatch();

  const usernameHandler = (username) => {
    console.log(username)
    distpatch(getUsername(username))
  }

  return (
    <>
      <StButton onClick={() => usernameHandler(username)}>작성 완료</StButton>
    </>
  );
};

export default Button;

const StButton = styled.button`
  width: 25%;
  height: 8%;

  font-size: 1.2em;
  font-weight: bold;

  border-radius: 10px;
  border: none;

  background-color: #fff;

  box-shadow: 5px 5px 5px gray;

  cursor: pointer;
`;
