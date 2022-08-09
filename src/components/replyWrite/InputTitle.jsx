import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

const InputTitle = () => {
  // const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  // const onChange = () => {
  //   const _inputTitle = {
  //     title:title
  //   }
  //   if(title !== '') {
  //     dispatch(_inputTitle)
  //   }
  // };

  console.log(title);

  return (
    <StInputTitle>
      <StTitle>제 목</StTitle>
      <StInput
        type="text"
        placeholder="20자 이내로 작성해주세요."
        onChange={(e) => setTitle(e.target.value)}
      />
    </StInputTitle>
  );
};

export default InputTitle;

const StInputTitle = styled.div`
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
const StTitle = styled.div`
  width: 60px;

  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
