import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentList: [
    {
      id: '0',
      username: '배돌이',
      content: '비가 주륵주륵!',
      createAt: '5분전',
    },
    {
      id: '1',
      username: '배돌이',
      content: '비가 주륵주륵 아휴!',
      createAt: '5분전',
    },
  ],

  comment: {
    id: '0',
    userName: '배돌이',
    content: '비가 주륵주륵!',
    createAt: '5분전',
  },
};

export const commentList = createSlice({
  name: 'commentList',
  initialState,


	reducers: {
		addComment: (state, action) => {
			// action.payload -> comment
			state.commentList = state.commentList.concat({ ...action.payload, createAt: new Date().toISOString() }); 
			console.log(action)
		},
		removeComment: (state, action) => {
			// action.paylod -> id
			state.commentList = state.commentList.filter((item) => item.id !== action.payload);
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
		getComment: (state, action) => {
			// action.payload -> id
			state.comment = state.commentList.find((item) => item.id === action.payload);
		}
	}
});


    deleteList: (state, action) => {
      let dummyArray = [];
      state.commentList = state.commentList.map((item) => {
        if (item.id === action.payload) {
        } else {
          dummyArray.push(item);
        }
        state.commentList = dummyArray;
      });
    },
  },
});

export const {
  addComment,
  removeComment,
  editComment,
  getComment,
  deleteList,
} = commentList.actions;
export default commentList.reducer;
