import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	replyList: [
		{
			id: 0,
			commentId: "1",
			userName: 'aaa',
			content: '나도 졸리다',
			createAt: '2022-08-08T10:50:00.000Z'
		},
		{
			id: 1,
			commentId: "1",
			userName: 'abc',
			content: '오늘 날씨가 우중충해서 더 졸리다.',
			createAt: '2022-08-08T15:50:00.000Z'
		}
	],
	reply: {
		replyId: 0,
		commnetId: 1,
		userName: "",
		content: "",
		createAt: ""
	}
}

const reply = createSlice({
	name: "reply",
	initialState,
	reducers: {
		addReply: (state, action) => {
			// console.log('add reply');
			state.replyList.push({ ...action.payload, createAt: new Date().toISOString()});
		},
		removeReply: (state, action) => {
			state.replyList = state.replyList.filter((item) => item.id !== action.payload);
		},
		editReply: (state, action) => {
			state.replyList.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			})
		},
		getReply: (state, action) => {
			// console.log('get reply');
			state.reply = state.replyList.find((item) => item.id === action.payload);
		}
	}
})

export const { addReply, removeReply, editReply, getReply } = reply.actions;
export default reply.reducer;