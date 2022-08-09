import { useRef, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import InputBox from './InputBox';

const Form = () => {
  const comment = useSelector((state) => state.comment.commentList);

  const [commentList, setCommentList] = useState({
    username: '',
    content: '',
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCommentList({
      id: comment.length + 1,
      ...commentList,
      [name]: value,
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <InputBox commentList={commentList} onchangeHandler={onChangeHandler} />
    </div>
  );
};

export default Form;
