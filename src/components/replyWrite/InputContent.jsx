import { useState } from 'react';

import styled from 'styled-components';

const InputContent = ({ content, setContent }) => {
  // const [content, setContent] = useState('');
  // console.log(content);

  return (
    <StInputContent>
      <StContent>내 용</StContent>
      <StInput
        placeholder="200자 이내로 작성해주세요."
				value={content}
        onChange={(e) => setContent(e.target.value)}
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

  color: #fff;
`;
const StInput = styled.textarea`
  width: 80%;
  height: 90%;

  border: 2px solid #666;
  border-radius: 10px;

  resize: none;
  overflow: hidden;

  padding: 10px;

  ::placeholder {
    font-weight: bold;
  }
`;
const StContent = styled.div`
  width: 60px;

  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
