import { useState } from 'react';

import styled from 'styled-components';

const InputWriter = () => {
  const [writer, setWriter] = useState('');

  console.log(writer);

  return (
    <StInputWriter>
      <StWriter>작성자</StWriter>
      <StInput
        type="text"
        placeholder="5자 이내로 작성해주세요."
        onChange={(e) => setWriter(e.target.value)}
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

  color: #fff;
`;
const StInput = styled.input`
  width: 80%;
  height: 90%;

  border: 2px solid #666;
  border-radius: 10px;

  padding: 0 10px;
`;
const StWriter = styled.div`
  width: 60px;

  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
