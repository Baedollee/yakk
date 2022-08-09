import React from 'react';
import styled, { css } from 'styled-components';
import { EditOutlined, HomeOutlined, HeartOutlined, HeartFilled, DeleteOutlined } from '@ant-design/icons';

function KingButton(props) {

	const checkId = (id) => {
		switch (id) {
			case 'homeBtn':
				return <HomeOutlined />;
			case 'addBtn':
				return <EditOutlined />;
			case 'heartBtn':
				return <HeartOutlined />;
			case 'heartFillBtn':
				return <HeartFilled />;
			case 'deleteBtn':
				return <DeleteOutlined />;
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
          font-size: 20px;
        `;

			case 'heartBtn':
			case 'deleteBtn':
				return css`
					font-size: 20px;
				`;

			case 'heartFillBtn':
				return css`
					color: red;
					font-size: 20px;
				`;

			case 'writeBtn':
				return css`
					width: 25%;
				  height: 8%;

				  font-size: 1.2em;
				  font-weight: bold;

				  border-radius: 10px;
				  border: none;

				  background-color: #fff;

				  box-shadow: 5px 5px 5px gray;

				  cursor: pointer;
				`;

			case 'backBtn':
				return css`
					font-size: 2em;
					cursor: pointer;
					margin-right: 85%;
					border: none;
				  background-color: darkcyan;
				  :focus {
				    border: none;
				    outline: none !important;
				  }
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
		
		}}
	}
`;

export default KingButton;
