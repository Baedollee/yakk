import { useRef, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import InputBox from './InputBox';

const Form = ({ commentId }) => {
  const comment = useSelector((state) => state.comment.commentList);

  const [commentList, setCommentList] = useState({
    username: '',
    content: '',
  });
	
  const onChangeHandler = (e, isEdit) => {
    const { value, name } = e.target;
		console.log(value, name);
		const id = isEdit ? commentId : (comment.length + 1).toString();
    setCommentList({
      id: id,
      ...commentList,
      [name]: value,
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <InputBox commentList={commentList} onchangeHandler={onChangeHandler} commentId={commentId} setCommentList={setCommentList}/>
    </div>
  );
};

export default Form;
