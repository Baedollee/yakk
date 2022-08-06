import styled from 'styled-components';

const Button = () => {
  return (
    <>
      <StButton>작성 완료</StButton>
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
