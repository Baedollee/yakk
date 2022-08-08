import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	replies: [
		{
			id: 0,
			commentId: 1,
			username: 'aaa',
			content: '나도 졸리다',
			createdAt: '3분전'
		},
		{
			id: 1,
			commentId: 1,
			username: 'abc',
			content: '오늘 날씨가 우중충해서 더 졸리다.',
			createdAt: '2분전'
		}
	],
	reply: {
		replyId: 0,
		commnetId: 1,
		username: "",
		content: "",
		createdAt: ""
	}
}

const reply = createSlice({
	name: "reply",
	initialState,
	reducers: {
		addReply: (state, action) => {
			state.replies.push(action.payload);
		},
		removeReply: (state, action) => {
			// console.log(state.replies.filter((item) => item.id !== action.payload))
			state.replies = state.replies.filter((item) => item.id !== action.payload);
		},
		editReply: (state, action) => {
			state.replies.map((item) => {
				if (item.id === action.payload) {
					return { ...item, editCheck: !item.editCheck }
				} else {
					return item;
				}
			})
		},
		getReply: (state, action) => {
			state.reply = state.replies.find((item) => item.id === action.payload);
		}
	}
})

export const { addReply, removeReply, editReply, getReply } = reply.actions;
export default reply.reducer;