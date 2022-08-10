import { useRef, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import InputBox from './InputBox';

const Form = ({ commentId }) => {
  const url = process.env.REACT_APP_URL;
  
  const comment = useSelector((state) => state.comment.commentList);
  console.log(comment)

  const [commentList, setCommentList] = useState({
    username: '',
    content: '',
  });
	
  const onChangeHandler = (e, isEdit) => {
    const { value, name } = e.target;
		console.log(value, name);
		const id = isEdit ? commentId : (comment.length + 1).toString();
    setCommentList({
      // id: id,
      ...commentList,
      [name]: value,
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <InputBox _comment={comment} commentList={commentList} onchangeHandler={onChangeHandler} commentId={commentId} setCommentList={setCommentList} url={url} />
    </div>
  );
};

export default Form;
