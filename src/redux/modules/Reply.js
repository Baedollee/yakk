import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	replies: [{
		replyId: 0,
		commnetId: 1,
		username: "",
		content: "",
		createdAt: "",
		editCheck: false
	}],
	reply: {
		replyId: 0,
		commnetId: 1,
		username: "",
		content: "",
		createdAt: "",
		editCheck: false
	}
}

const reply = createSlice({
	name: "reply",
	initialState,
	reducers: {
		add: (state, action) => {
			state.replies.push(action.payload);
		},
		remove: (state, action) => {
			state.replies = state.replies.filter((item) => item.id !== action.payload);
		},
		edit: (state, action) => {
			state.replies.map((item) => {
				if (item.id === action.payload) {
					return { ...item, editCheck: !item.editCheck }
				} else {
					return item;
				}
			})
		}
	}
})

export const { add, remove, edit } = reply.actions;
export default reply.reducer;