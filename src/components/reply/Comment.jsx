import React from 'react';
import styled from 'styled-components';

function Comment() {
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
			<ContentFooter>
				<ContentComment>
					<button>댓글버튼</button>
					<span>10</span>
					<button>하트버튼</button>
					<span>10</span>
				</ContentComment>
				<button>댓글 작성</button>
			</ContentFooter>
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

const ContentFooter = styled.div`
  margin: 20px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
`;

const ContentComment = styled.div`
  button {
    margin-right: 10px;
  }

  span {
    /* background-color: coral; */
    margin-right: 10px;
  }
`;

export default Comment;
