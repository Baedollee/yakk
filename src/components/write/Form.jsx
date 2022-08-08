import { useState } from 'react';

import InputBox from './InputBox';

const Form = () => {
  const [username, setUsername] = useState('1')
  const [content, setContent] = useState('1')
  const [commentList, setCommentList] = useState([
    {
      id: '1',
      username: '박재정',
      content: '리덕스를 공부해보자',
      createdAt: '',
    }
  ]); 

  // console.log(username,content)

  const getUsername = (username) => {
    setUsername(username);
    console.log(username)
  };
  const getContent = (content) => {
    setContent(content);
    console.log(content)
  };
  const inputReset = () => {
    setUsername('')
    setContent('')
  };
  const addComment = ({username, content}) => {
    username !== '' && content !== ''
    ? setCommentList([...commentList, { username: username, content: content }])
    : alert('입력해주세요')
  };

  return (
    <div style={{ height: '100vh' }}>
      <InputBox commentList={commentList} getUsername={getUsername} getContent={getContent} addComment={addComment} inputReset={inputReset} />
      작성자{username} 내용{content} 
      {/* ?{{username, content}} */}
    </div>
  );
};

export default Form;
