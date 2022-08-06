import React from 'react';
import styled from 'styled-components';
import Reply from './Reply';

function CommentList() {
	return (
		<List>
			<h4>댓글</h4>
			{Array.from({ length: 5 }).map((item, idx) => <Reply key={idx}/>)}
		</List>
	)
}

const List = styled.div`
  background-color: lightyellow;

  h4 {
    margin: 20px 20px;
  }
`;

export default CommentList;