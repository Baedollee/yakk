import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	comments: [{
		commnetId: 0,
		username: "",
		title: "",
		content: "",
		createdAt: ""
	}],
	comment: {
		commnetId: 0,
		username: "",
		title: "",
		content: "",
		createdAt: ""
	}
}

const comment = createSlice({
	name: "comment",
	initialState,
	reducers: {
		get: (state, action) => {
			state.comment = state.comments.find((item) => item.id === action.payload);
		},
		add: (state, action) => {
			state.comments.push(action.payload);
		},
		remove: (state, action) => {
			state.comments.filter((item) => item.id !== action.payload);
		},
		edit: (state, action) => {
			state.comments.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			})
		}
	}
})

export const { add, remove, edit } = comment.actions;
export default comment.reducer;