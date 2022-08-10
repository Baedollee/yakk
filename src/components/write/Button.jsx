import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, asyncAddPost, asyncEditPost, editComment } from '../../redux/reducer/baeReducer';
import { useNavigate } from 'react-router-dom';
import KingButton from '../kingButton/Button';

const Button = ({ commentList, isEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const a = useSelector((state) => state.comment.commentList);
  console.log('a:', a);
  // console.log(commentList.username);

  const onClickHandler = () => {
    if (commentList.username === '' && commentList.content === '') {
      alert('항목을 전부 입력해주세요!');
    } else if (commentList.username.split('').length > 5) {
      alert('작성자명을 5자 이하로 입력해주세요!');
    } else if (commentList.content.split('').length > 200) {
      alert('내용을 200자 이하로 입력해주세요!');
    } else {
			console.log('click button', commentList);
			if (isEdit) {
				// dispatch(editComment(commentList));
				dispatch(asyncEditPost(commentList));
				alert('수정 완료!');
			} else {
				// dispatch(addComment(commentList));
				dispatch(asyncAddPost(commentList));
				console.log(commentList);
				alert('작성 완료!');
			}
      navigate(-1);
    }
  };

  return (
    <>
      {/* <KingButton id='writeBtn'
        onClick={() => {
          onClickHandler(commentList);
        }}>
        작성 완료
      </KingButton> */}
			<KingButton id='writeBtn' onClick={onClickHandler}>{isEdit ? '수정' : '작성'} 완료</KingButton>
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
