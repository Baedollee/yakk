import styled from 'styled-components';
import { colorBlack, colorPink1, colorWhite } from '../color/ColorPalette';

const InputWriter = ({ onchangeHandler, username, isEdit }) => {
  return (
    <StInputWriter>
      <StWriter>작성자</StWriter>
      <StInput
        type="text"
        autoComplete='off'
        placeholder="5자 이내로 작성해주세요."
        name='username'
				value={username || ''}
        onChange={(e) => {onchangeHandler(e, isEdit)}}
      />
    </StInputWriter>
  );
};

export default InputWriter;

const StInputWriter = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  width: 90%;
  height: 8%;

  color: ${colorWhite};
`;
const StInput = styled.input`
  width: 80%;
  height: 90%;

  font-size: 1em;

  color:${colorWhite};

  border: 2px solid ${colorPink1};
  border-radius: 7px;

  background-color:${colorBlack};

  padding: 0 10px;

  outline-color:${colorPink1};

  :focus{
    outline:none;
  }
  
  ::placeholder{
    color:${colorWhite};
  }
`;
const StWriter = styled.div`
  width: 60px;

  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
