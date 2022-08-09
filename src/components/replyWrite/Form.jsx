import InputBox from './InputBox';

const Form = ({ commentId, replyId }) => {
  return (
    <div style={{ height: '100vh' }}>
      <InputBox commentId={commentId} replyId={replyId} />
    </div>
  );
};

export default Form;
