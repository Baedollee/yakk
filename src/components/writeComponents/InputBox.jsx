import styled from "styled-components"

import InputWriter from "./InputWriter"
import InputTitle from "./InputTitle"
import InputContent from "./InputContent"
import Button from "./Button"

const InputBox = () => {

  return (
    <InputBoxContainer>
    <div style={{fontSize:'2em', cursor:'pointer',marginRight:'85%'}}>🔙</div>
      <InputWriter />
      <InputTitle />
      <InputContent />
      <Button />
    </InputBoxContainer>
  )
}

export default InputBox

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  width:800px;
  height: 600px;
  
  background-color: darkcyan;

  border-radius: 40px;

  padding: 20px 0;

  box-shadow: 10px 10px 10px gray;
`;