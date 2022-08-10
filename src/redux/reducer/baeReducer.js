import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const nowDate = new Date().toISOString();
const url_post = process.env.REACT_APP_URL + '/postList';

export const asyncGetPost = createAsyncThunk(
	"postList/getPost",
	async (payload, thunkAPI) => {
		// payload -> post id
		const response = await axios.get(url_post + `/${payload}`);
		return response.data;
	}
);

export const asyncGetAllPost = createAsyncThunk(
	"postList/getAllPost",
	async (payload, thunkAPI) => {
		// payload -> post id
		const response = await axios.get(url_post);
		return response.data;
	}
);

export const asyncAddPost = createAsyncThunk(
	"postList/addPost",
	async (payload, thunkAPI) => {
		// payload -> post
		const response = await axios.post(url_post, { 
			...payload, 
			createAt: new Date().toISOString(),
			like: false,
			replyNum: 0
		});
		return response.data;
	}
)

export const asyncEditPost = createAsyncThunk(
	"postList/editPost",
	async (payload, thunkAPI) => {
		// payload -> post
		console.log('edit post', payload);
		const response = await axios.put(url_post + `/${payload.id}`, payload);
		return response.data;
	}
);

export const asyncRemovePost = createAsyncThunk(
	"postList/removePost",
	async (payload, thunkAPI) => {
		// payload -> post id
		const response = await axios.delete(url_post + `/${payload}`);
		return payload;
	}
);

export const asyncLikePost = createAsyncThunk(
	"postList/likePost",
	async (payload, thunkAPI) => {
		// payload -> post
		const response = await axios.put(url_post + `/${payload.id}`,  { ...payload, like: !payload.like });
		return response.data;
	}
);

export const asyncPlusReplyNum = createAsyncThunk(
	"postList/plusReplyNum",
	async (payload, thunkAPI) => {
		// payload -> post id
		const res = await axios.get(url_post + `/${payload}`);
		const response = await axios.put(url_post + `/${payload}`,  { ...res.data, replyNum: res.data.replyNum + 1 });
		return response.data;
	}
);

export const asyncMinusReplyNum = createAsyncThunk(
	"postList/minusReplyNum",
	async (payload, thunkAPI) => {
		// payload -> post id
		const res = await axios.get(url_post + `/${payload}`);
		const response = await axios.put(url_post + `/${payload}`,  { ...res.data, replyNum: res.data.replyNum - 1 });
		return response.data;
	}
);

const initialState = {
  commentList: [
      {
      id: '0',
      username: '배돌이',
      content: '비가 주륵주륵!',
      createAt: nowDate,
      like: false,
			replyNum: 0
    },
    {
      id: '1',
      username: '배돌이',
      content: '비가 주륵주륵 아휴!',
      createAt: nowDate,
      like: false,
			replyNum: 2
    },
  ],
  
  comment: {
    id: '0',
    userName: '배돌이',
    content: '비가 주륵주륵!',
    createAt: nowDate,
    like: false,
		replyNum: 0
  },
};

export const commentList = createSlice({
  name: 'commentList',
  initialState,
  reducers: {
    addComment: (state, action) => {
      // action.payload -> comment
      state.commentList.concat(axios.post('http://localhost:3001/postList',
      {
        ...action.payload,
        createAt: new Date().toISOString(),
				like: false
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.response);
      }));
      console.log(action);
    },
    
  //   removeComment: (state, action) => {
  //     // action.paylod -> id
  //     state.commentList = state.commentList.filter(
  //       (item) => item.id !== action.payload
  //     );
  //   },
  //   editComment: (state, action) => {
  //     // action.payload -> comment

  //     state.commentList = state.commentList.map((item) => {
  //       if (item.id === action.payload.id) {
  //         return { ...action.payload, createAt: item.createAt, like: item.like };
  //       } else {
  //         return item;
  //       }
  //     });
  //   },
  //   likeComment: (state, action) => {
  //     state.commentList = state.commentList.map((item, index) => {
  //       if (item.id === action.payload) {
  //         return { ...item, like: !item.like };
  //       } else {
  //         return item;
  //       }
  //     });
  //   },
  //   getComment: (state, action) => {
  //     // action.payload -> id
  //     state.comment = state.commentList.find(
  //       (item) => item.id === action.payload
  //     );
  //   },
  // },

	extraReducers: {
		[asyncGetPost.fulfilled]: (state, action) => {
			// action.payload -> post
			state.comment = action.payload;
		},

		[asyncGetAllPost.fulfilled]: (state, action) => {
			// action.payload -> post all list
			state.commentList = action.payload;
			console.log(state.commentList);
		},

		[asyncAddPost.fulfilled]: (state, action) => {
			// action.payload -> post
			state.commentList = state.commentList.concat({
	      ...action.payload,
	      createAt: new Date().toISOString(),
				like: false,
				replyNum: 0
	    });
		},

		[asyncEditPost.fulfilled]: (state, action) => {
			// action.payload -> post
			state.commentList = state.commentList.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			})
		},

		[asyncRemovePost.fulfilled]: (state, action) => {
			// action.payload -> id
			state.commentList = state.commentList.filter((item) => item.id !== action.payload);
		},

		[asyncLikePost.fulfilled]: (state, action) => {
			// action.payload -> post
			state.commentList = state.commentList.map((item, index) => {
	      if (item.id === action.payload.id) {
	        return { ...item, like: !item.like };
	      } else {
	        return item;
	      }
	    });
			console.log(state.commentList);
		}
	},

	[asyncPlusReplyNum.fulfilled]: (state, action) => {
		// action.payload -> post
		state.commentList = state.commentList.map((item, index) => {
			if (item.id === action.payload.id) {
				return { ...item, like: item.replyNum + 1 };
			} else {
				return item;
			}
		});
	},
	
	[asyncMinusReplyNum.fulfilled]: (state, action) => {
		// action.payload -> post
		state.commentList = state.commentList.map((item, index) => {
			if (item.id === action.payload.id) {
				return { ...item, like: item.replyNum - 1 };
			} else {
				return item;
			}
		});
	}
});

export const {
  addComment,
  removeComment,
  editComment,
  getComment,
  likeComment,
} = commentList.actions;

export default commentList.reducer;
