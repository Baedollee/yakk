import styled from 'styled-components';

import InputWriter from './InputWriter';
import InputContent from './InputContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import KingButton from '../kingButton/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetPost, getComment } from '../../redux/reducer/baeReducer';

const InputBox = ({ commentList, onchangeHandler, commentId, setCommentList }) => {
  const navigate = useNavigate();
	const dispatch = useDispatch();

	const comment = useSelector((item) => item.comment.comment);
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		if (commentId !== undefined) {
			// dispatch(getComment(commentId));
			dispatch(asyncGetPost(commentId));
			setCommentList({
				...comment,
				username: comment.username,
				content: comment.content,
			});
			setIsEdit(true);
		}
		console.log('finish get comment', comment);
	}, [JSON.stringify(comment)]);

  return (
    <InputBoxContainer>
      <KingButton id='backBtn'
        style={{ fontSize: '2em', cursor: 'pointer', marginRight: '85%' }}
        onClick={() => {
          navigate(-1);
        }}>
        🔙
      </KingButton>
      <InputWriter onchangeHandler={onchangeHandler} username={commentList.username} isEdit={isEdit}/>
      <InputContent onchangeHandler={onchangeHandler} content={commentList.content} isEdit={isEdit}/>
      <Button commentList={commentList} isEdit={isEdit} />
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  width: 800px;
  height: 600px;

  background-color: darkcyan;

  border-radius: 40px;

  padding: 20px 0;

  box-shadow: 10px 10px 10px gray;
`;
