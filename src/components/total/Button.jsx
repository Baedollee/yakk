import React from 'react';
import styled, { css } from 'styled-components';
import { EditOutlined, HomeOutlined, HeartOutlined, HeartFilled, DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { colorBlack, colorPink1, colorPink2, colorWhite } from '../color/ColorPalette';

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
			case 'backBtn':
				return <ArrowLeftOutlined />;
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
					color:${colorWhite};

				  border-radius: 10px;
				  border: 2px solid ${colorPink1};

					transition: all 150ms;

					:hover{
						border:2px solid ${colorPink1};

						z-index: 1;
						transform: scale(1.1)
					}

				  cursor: pointer;
				`;

			case 'backBtn':
				return css`
					font-size: 2em;
					cursor: pointer;
					margin-right: 85%;
					border: none;
					color:${colorWhite};
				  background:none;
					transition: all 150ms;
					
					:hover{
						color:${colorPink2};
						z-index: 1;
						transform: scale(1.2)
					}
				`;

      default:
        return css`
          width: 80px;
          height: 30px;
					color: ${colorPink2};

					margin: auto 10px;
				  border: 1px solid ${colorPink2};
				  border-radius: 10px;
					font-size: 15px;
					&:hover {
						background-color: ${colorPink2};
						color: ${colorWhite};
					}
        `;
		
		}}
	}
`;

export default KingButton;
