import styled from 'styled-components';

import InputWriter from './InputWriter';
import InputTitle from './InputTitle';
import InputContent from './InputContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const InputBox = ({ commentList, getUsername, getContent, addComment, inputReset, username, content }) => {
  const navigate = useNavigate();
  return (
    <InputBoxContainer>
      <div
        style={{ fontSize: '2em', cursor: 'pointer', marginRight: '85%' }}
        onClick={() => {
          navigate(-1);
        }}>
        🔙
      </div>
      <InputWriter commentList={commentList} getUsername={getUsername} username={username}/>
      {/* <InputTitle /> */}
      <InputContent getContent={getContent} username={username} content={content} />
      <Button addComment={addComment} inputReset={inputReset} username={username} content={content} />
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  width: 800px;
  height: 600px;

  background-color: darkcyan;

  border-radius: 40px;

  padding: 20px 0;

  box-shadow: 10px 10px 10px gray;
`;
