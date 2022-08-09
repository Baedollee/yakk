import styled from 'styled-components';

import InputWriter from './InputWriter';
import InputContent from './InputContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getReply } from '../../redux/reducer/rangReducer';

const InputBox = ({ commentId, replyId }) => {
  const navigate = useNavigate();
	const dispatch = useDispatch();

	const reply = useSelector((item) => item.reply.reply);

	const [username, setUsername] = useState('');
	const [content, setContent] = useState('');
	console.log(username, content);

	useEffect(() => {
		if (replyId !== '') {
			dispatch(getReply(replyId));
			console.log('finish get reply', reply);
		}
	}, [reply]);


  return (
    <InputBoxContainer>
      <div
        style={{ fontSize: '2em', cursor: 'pointer', marginRight: '85%' }}
        onClick={() => {
          navigate(-1);
        }}>
        🔙
      </div>
      <InputWriter replyUsername={reply.username} setUsername={setUsername}/>
      {/* <InputTitle /> */}
      <InputContent replyContent={reply.content} setContent={setContent}/>
      <Button commentId={commentId} username={username} content={content} reply={reply}/>
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
