import React from 'react'
import styled, { css } from 'styled-components';

function Button(props) {
	console.log(props);
	return (
		<BtnContainer {...props} disabled={props.disabled}>
			{props.children}
		</BtnContainer>
	)
}

const BtnContainer = styled.div`
	border: 2px solid violet;
	border-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	${({id}) => {
		switch (id) {
			case "homeBtn":
			case "addBtn":
				return css`
					width: 100px;
					height: 100px;
				`;
			
			default:
				return css`
					width: 100px;
					height: 30px;
				`;
		}
	}}
`;

export default Button;