import { createSlice } from "@reduxjs/toolkit";

// const WRITE_TITLE = "app/write/WRITE_TITLE";

const initialState = {
  comment:{
    id:0,
    username:'재정',
    content:'즐겁다'
  },
}

const createComment = createSlice({
  name:"getComment",
  initialState,
  reducers:{
    getUsername: (state, action) => {
      state.comment.username = action.payload
      console.log(action.payload)
    },
    getContent: (state, action) => {
      state.comment.content = action.payload
    },
  }
});

console.log('comment:', createComment.actions )

export const { getUsername, getContent } = createComment.actions;

export default createComment.reducer;