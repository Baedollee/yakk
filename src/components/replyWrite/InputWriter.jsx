import styled from 'styled-components';

const InputWriter = ({ username, setUsername }) => {
	
	const onCheckUsernameLength = (e) => {
		if (e.target.value.length > 5) {
			alert('작성자 이름은 5글자 이내로 적어주세요.')
		} else {
			setUsername(e.target.value);
		}
	}

  return (
    <StInputWriter>
      <StWriter>작성자</StWriter>
      <StInput
        type="text"
        placeholder="5자 이내로 작성해주세요."
				value={username}
        onChange={onCheckUsernameLength}
      />
    </StInputWriter>
  );
};

export default InputWriter;

const StInputWriter = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  width: 90%;
  height: 8%;

  color: #fff;
`;
const StInput = styled.input`
  width: 80%;
  height: 90%;

  border: 2px solid #666;
  border-radius: 10px;

  padding: 0 10px;
`;
const StWriter = styled.div`
  width: 60px;

  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
