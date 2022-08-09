import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addReply, editReply } from '../../redux/reducer/rangReducer';

const Button = ({ commentId, username, content, reply, isEdit }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const newReply = {
		id: '11' + username,
		commentId: commentId,
		userName: username,
		content: content
	}

	const onAddReplyHandler = (reply) => {
		// console.log('reply add', reply);
		dispatch(addReply(reply));
		navigate(-1);
	}

	const onEditReplyHandler = (reply) => {
		// console.log('reply edit', {...reply, userName: username, content: content});
		dispatch(editReply({...reply, userName: username, content: content}));
		navigate(-1);
	}

  return (
		<StButton onClick={isEdit ? () => onEditReplyHandler(reply) : () => onAddReplyHandler(newReply)}>{isEdit ? '수정' : '작성'} 완료</StButton>
	);
};

export default Button;

const StButton = styled.button`
  width: 25%;
  height: 8%;

  font-size: 1.2em;
  font-weight: bold;

  border-radius: 10px;
  border: none;

  background-color: #fff;

  box-shadow: 5px 5px 5px gray;

  cursor: pointer;
`;
