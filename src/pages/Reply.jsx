import React from 'react';
import styled from 'styled-components';
import HeaderReply from '../components/reply/HeaderReply';
import { useNavigate } from 'react-router-dom';
import Reply from '../components/reply/Reply';
import CommentList from '../components/reply/CommentList';

function Detail() {
  return (
    <DetailContainer>
      <HeaderReply />
			<CommentList />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  /* background-color: blueviolet; */
  height: 80%;
  min-width: 600px;
  margin: 30px 300px;
`;

export default Detail;
