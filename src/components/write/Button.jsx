import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, asyncAddPost, asyncEditPost, asyncPlusReplyNum, editComment } from '../../redux/reducer/baeReducer';
import { useNavigate } from 'react-router-dom';
import KingButton from '../total/Button';
import { asyncAddReply, asyncEditReply } from '../../redux/reducer/rangReducer';

const Button = ({ commentList, replyList, isEdit, isPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const a = useSelector((state) => state.comment.commentList);
  console.log('a:', a);
  // console.log(commentList.username);
	
	const list = isPost ? commentList : replyList;
	const edit = isPost ? isEdit.post : isEdit.reply;
	console.log(isPost, list);

  const onClickHandler = () => {
    if (list.username === '' && list.content === '') {
      alert('항목을 전부 입력해주세요!');
    } else if (list.username.split('').length > 5) {
      alert('작성자명을 5자 이하로 입력해주세요!');
    } else if (list.content.split('').length > 200) {
      alert('내용을 200자 이하로 입력해주세요!');
    } else {
			console.log('click button', list);
			if (edit) {
				onCheckEditHandler(isPost);
				alert('수정 완료!');
				navigate(-1);
			} else {
				onCheckAddHandler(isPost);
				alert('작성 완료!');
				navigate(-1);
			}
		} 
  };
	
	const onCheckAddHandler = (isPost) => {
		if (isPost) {
			// dispatch(addComment(commentList));
			dispatch(asyncAddPost(commentList));
			console.log(commentList);
		} else {
			// dispatch(addReply(reply));
			dispatch(asyncAddReply(replyList));
			dispatch(asyncPlusReplyNum(commentList.id));
		}
	};

	const onCheckEditHandler = (isPost) => {
		if (isPost) {
			// dispatch(editComment(commentList));
			dispatch(asyncEditPost(commentList));
		} else {
			// dispatch(editReply({...reply, userName: username, content: content}));
			dispatch(asyncEditReply(replyList));
		}
	};

  return (
    <>
			<KingButton id='writeBtn' onClick={onClickHandler}>{edit ? '수정' : '작성'} 완료</KingButton>
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
