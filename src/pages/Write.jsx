import Header from "../components/writeComponents/Header"
import Form from "../components/writeComponents/Form"
import styled from "styled-components"

const Write = () => {

  return (
    <WriteContainer>
      <Header />
      <Form />
    </WriteContainer>
  )
}

export default Write

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: pink;
`;