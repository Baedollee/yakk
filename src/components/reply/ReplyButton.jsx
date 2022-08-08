import React from 'react';
import styled, { css } from 'styled-components';
import { EditOutlined, HomeOutlined } from '@ant-design/icons';

function ReplyButton(props) {

	const checkId = (id) => {
		switch (id) {
			case 'homeBtn':
				return <HomeOutlined />
			case 'addBtn':
				return <EditOutlined />
			default:
				return props.children;
		}
	}

	return (
		<BtnContainer {...props} disabled={props.disabled}>
			{checkId(props.id)}
		</BtnContainer>
	);
}

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ id }) => {
    switch (id) {
      case 'homeBtn':
      case 'addBtn':
        return css`
          width: 50px;
          height: 50px;
					font-size: 30px;
        `;

      default:
        return css`
          width: 80px;
          height: 30px;
					margin: auto 10px;
				  border: 2px solid blueviolet;
				  border-radius: 10px;
					font-size: 15px;
					&:hover {
						background-color: blueviolet;
						color: white;
						font-weight: bold;
					}
        `;
    }
  }}
`;

export default ReplyButton;
