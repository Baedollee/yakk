import styled from 'styled-components';
import { colorBlack, colorPink1, colorWhite } from '../color/ColorPalette';

const InputContent = ({ onchangeHandler, content, isEdit }) => {
  // const [content, setContent] = useState('');
  // console.log(content);

  return (
    <StInputContent>
      <StContent>내 용</StContent>
      <StInput
        name='content'
        placeholder="200자 이내로 작성해주세요."
				value={content}
        onChange={(e) => onchangeHandler(e)}
      />
    </StInputContent>
  );
};

export default InputContent;

const StInputContent = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;

  width: 90%;
  height: 40%;

  color: ${colorWhite};
`;
const StInput = styled.textarea`
  width: 80%;
  height: 90%;

  font-size: 1em;

  border: 2px solid ${colorPink1};
  border-radius: 7px;
  background-color:${colorBlack};
  resize: none;
  overflow: hidden;

  color:${colorWhite};

  padding: 10px;
  background-color:none;

  :focus{
    outline:none;
  }
  /* outline-color:${colorPink1}; */

  ::placeholder {
    color:${colorWhite};
  }
`;
const StContent = styled.div`
  width: 60px;

  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
