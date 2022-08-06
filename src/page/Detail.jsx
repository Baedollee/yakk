import React from 'react';
import styled from 'styled-components';

function Detail() {
	return (
		<DetailContainer>
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

			<Comment>
				<h4>댓글</h4>
				{Array.from({length: 5}).map((item, idx) => {
					return (
						<Content key={idx}>
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
				})}
			</Comment>
		</DetailContainer>
	)
}

const DetailContainer = styled.div`
	/* background-color: blueviolet; */
	height: 80%;
	min-width: 600px;
	margin: 30px 300px;
`;

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

const Comment = styled.div`
	background-color: lightyellow;

	h4 {
		margin: 20px 20px;
	}
`;


export default Detail;