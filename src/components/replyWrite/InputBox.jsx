import styled from 'styled-components';

import InputWriter from './InputWriter';
import InputContent from './InputContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { asyncGetOneReply, getReply } from '../../redux/reducer/rangReducer';

const InputBox = ({ commentId, replyId }) => {
	console.log('input box', replyId);
  const navigate = useNavigate();
	const dispatch = useDispatch();

	const reply = useSelector((item) => item.reply.reply);

	const [username, setUsername] = useState('');
	const [content, setContent] = useState('');
	const [isEdit, setIsEdit] = useState(false);
	// console.log(username, content);

	useEffect(() => {
		if (replyId !== '') {
			// dispatch(getReply(replyId));
			dispatch(asyncGetOneReply(replyId));
			setUsername(reply.userName);
			setContent(reply.content);
			setIsEdit(true);
		} else {
			console.log('finish get reply', reply);
		}
	}, [JSON.stringify(reply)]);

  return (
    <InputBoxContainer>
      <div
        style={{ fontSize: '2em', cursor: 'pointer', marginRight: '85%' }}
        onClick={() => {
          navigate(-1);
        }}>
        🔙
      </div>
      <InputWriter username={username} setUsername={setUsername}/>
      {/* <InputTitle /> */}
      <InputContent content={content} setContent={setContent}/>
      <Button commentId={commentId} username={username} content={content} reply={reply} isEdit={isEdit}/>
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
