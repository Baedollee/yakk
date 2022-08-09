import { createSlice } from '@reduxjs/toolkit';


// const WRITE_TITLE = "app/write/WRITE_TITLE";

const initialState = {
  comment:[{
    id:0,
    username:'재정',
    content:'즐겁다'
  },]
}

const createComment = createSlice({
  name:"getComment",
  initialState,
  reducers:{
    getUsername: (state, action) => {
    },
    getContent: (state, action) => {
    },
  }
});

// console.log('comment:', createComment.actions )

export const { getUsername, getContent } = createComment.actions;

export default createComment.reducer;
