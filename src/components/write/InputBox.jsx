import styled from 'styled-components';

import InputWriter from './InputWriter';
import InputContent from './InputContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import KingButton from '../kingButton/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../../redux/reducer/baeReducer';
import { colorPink1, colorWhite } from '../color/ColorPalette';

const InputBox = ({ _comment, commentList, onchangeHandler, commentId, setCommentList, url }) => {
  const navigate = useNavigate();
	const dispatch = useDispatch();

	const comment = useSelector((item) => item.comment.comment);
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		if (commentId !== undefined) {
			dispatch(getComment(commentId));
			setCommentList({
				username: comment.username,
				content: comment.content
			});
			setIsEdit(true);
		}
		console.log('finish get comment', comment);
	}, [comment]);

  return (
    <InputBoxContainer>
      <KingButton id='backBtn'
        style={{ fontSize: '2em', cursor: 'pointer', marginRight: '85%' }}
        onClick={() => {
          navigate(-1);
        }}/>
      <InputWriter onchangeHandler={onchangeHandler} username={commentList.username} isEdit={isEdit}/>
      <InputContent onchangeHandler={onchangeHandler} content={commentList.content} isEdit={isEdit}/>
      <Button _comment={_comment} commentList={commentList} setCommentList={setCommentList} isEdit={isEdit} url={url} />
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

  margin-top: 30px;
  width: 800px;
  height: 600px;

  background: none;

  border: 2px solid ${colorWhite};
  border-radius: 15px;

  /* box-shadow: 10px 10px 10px gray; */
`;
