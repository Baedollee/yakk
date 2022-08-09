import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import InputBox from './InputBox';

const Form = () => {

  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [commentList, setCommentList] = useState([
    {
      id: '1',
      username: '박재정',
      content: '리덕스를 공부해보자',
      createdAt: '',
    },
  ]);

  // console.log(username,content)

  const getUsername = (username) => {
    setUsername(username);
  };
  const getContent = (content) => {
    setContent(content);
    // console.log(content);
  };

  // const inputReset = () => {
  //   setUsername('')
  //   setContent('')
  // };
  const addComment = (commentList) => {
    if (username !== '' && content !== ''){
      setCommentList([...commentList, { username: username, content: content }])
      setUsername('')
      setContent('')
    } else {
      alert('전부 입력해 주세요!!')
    }
    // ? setCommentList([...commentList, { username: username, content: content }]) setUsername('')
    // setContent('')
    // : alert('입력해주세요')
  };

  const dadada = useSelector((state) => state.write.comment)
  console.log(dadada)

  return (
    <div style={{ height: '100vh' }}>

      <InputBox commentList={commentList} getUsername={getUsername} getContent={getContent} addComment={addComment} username={username} content={content}
      // inputReset={inputReset} 
      />
      작성자{username} 내용{content} abc:{dadada.username} {dadada.content}
      
    </div>
  );
};

export default Form;
