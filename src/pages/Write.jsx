// import Header from '../components/write/Header';
import Header from '../components/total/Header';
import Form from '../components/write/Form';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { colorBlack } from '../components/color/ColorPalette';

const Write = () => {
  const { id } = useParams();

  const location = useLocation();
  const isPost = location.state.isPost;

  let replyId = '';
  if (location.state !== null) {
    replyId = location.state.replyId;
  } else {
    console.log("it's null");
  }

  return (
    <>
      <Form commentId={id} replyId={replyId} isPost={isPost} />
    </>
  );
};

export default Write;
