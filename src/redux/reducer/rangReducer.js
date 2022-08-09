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

const replyList = createSlice({
	name: "replyList",
	initialState,
	reducers: {
		addReply: (state, action) => {
			// action.payload -> reply
			state.replyList.push({ ...action.payload, createAt: new Date().toISOString()});
		},
		removeReply: (state, action) => {
			// action.payload -> id
			state.replyList = state.replyList.filter((item) => item.id !== action.payload);
		},
		editReply: (state, action) => {
			// action.payload -> reply
			state.replyList = state.replyList.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			})
		},
		getReply: (state, action) => {
			// action.payload -> id
			state.reply = state.replyList.find((item) => item.id === action.payload);
		}
	}
})

export const { addReply, removeReply, editReply, getReply } = replyList.actions;
export default replyList.reducer;