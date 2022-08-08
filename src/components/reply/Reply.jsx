import React from 'react';
import styled from 'styled-components';

function Reply() {
	return (
		<Content>
      <ContentHeader>
        <div>
          <span>작성자</span>
          <span>시간</span>
        </div>
        <div>
          <button>수정하기</button>
          <button>삭제하기</button>
        </div>
      </ContentHeader>
      <p>내용</p>
    </Content>
	)
}

const Content = styled.div`
  margin-bottom: 20px;
  /* background-color: beige; */
  border: 1px solid black;
  border-radius: 10px;

  p {
    margin: 20px;
    border: 1px solid black;
    /* background-color: aliceblue; */
    word-break: normal;
  }
`;

const ContentHeader = styled.div`
  margin: 20px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;

  div {
    span {
      /* background-color: coral; */
      margin-right: 30px;
    }

    button {
      margin-left: 30px;
    }
  }
`;

export default Reply;