import { createSlice } from '@reduxjs/toolkit';

const nowDate = new Date().toISOString();

const initialState = {
  commentList: [
    {
      id: '0',
      username: '배돌이',
      content: '비가 주륵주륵!',
      createAt: nowDate,
      like: false,
    },
    {
      id: '1',
      username: '배돌이',
      content: '비가 주륵주륵 아휴!',
      createAt: nowDate,
      like: false,
    },
  ],

  comment: {
    id: '0',
    userName: '배돌이',
    content: '비가 주륵주륵!',
    createAt: nowDate,
    like: false,
  },
};

export const commentList = createSlice({
  name: 'commentList',
  initialState,
  reducers: {
    addComment: (state, action) => {
      // action.payload -> comment
      state.commentList = state.commentList.concat({
        ...action.payload,
        createAt: new Date().toISOString(),
				like: false
      });
      console.log(action);
    },
    removeComment: (state, action) => {
      // action.paylod -> id
      state.commentList = state.commentList.filter(
        (item) => item.id !== action.payload
      );
    },
    editComment: (state, action) => {
      // action.payload -> comment
      state.commentList = state.commentList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    likeComment: (state, action) => {
      state.commentList = state.commentList.map((item, index) => {
        if (item.id === action.payload) {
          return { ...item, like: !item.like };
        } else {
          return item;
        }
      });
      console.log(action);
    },
    removeComment: (state, action) => {
      // action.paylod -> id
      state.commentList = state.commentList.filter(
        (item) => item.id !== action.payload
      );
    },
    editComment: (state, action) => {
      // action.payload -> comment

      state.commentList = state.commentList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload, createAt: item.createAt, like: item.like };
        } else {
          return item;
        }
      });
    },
    likeComment: (state, action) => {
      state.commentList = state.commentList.map((item, index) => {
        if (item.id === action.payload) {
          return { ...item, like: !item.like };
        } else {
          return item;
        }
      });
    },
    getComment: (state, action) => {
      // action.payload -> id
      state.comment = state.commentList.find(
        (item) => item.id === action.payload
      );
    },
    getComment: (state, action) => {
      // action.payload -> id
      state.comment = state.commentList.find(
        (item) => item.id === action.payload
      );
    },
  },
});

export const {
  addComment,
  removeComment,
  editComment,
  getComment,
  likeComment,
} = commentList.actions;

export default commentList.reducer;
