import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addReply } from '../../redux/reducer/rangReducer';

const Button = ({ commentId, username, content }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const reply = {
		id: '11' + username,
		commentId: commentId,
		userName: username,
		content: content
	}

	const onAddReplyHandler = (reply) => {
		console.log('reply add', reply);
		dispatch(addReply(reply));
		navigate(-1);
	}

  return (
    <>
      <StButton onClick={() => onAddReplyHandler(reply)}>작성 완료</StButton>
    </>
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
