import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url_replyList = process.env.REACT_APP_URL + '/replyList';

export const asyncGetOneReply = createAsyncThunk(
  'replyList/getOneReply',
  async (payload, thunkAPI) => {
    // payload -> reply id
    const response = await axios.get(url_replyList + `/${payload}`);
    return response.data;
  }
);

export const asyncGetPostReply = createAsyncThunk(
  'replyList/getAllReply',
  async (payload, thunkAPI) => {
    // payload -> post id
    const response = await axios.get(url_replyList + `?postId=${payload}`);
    return response.data;
  }
);

export const asyncAddReply = createAsyncThunk(
  'replyList/addReply',
  async (payload, thunkAPI) => {
    // payload -> reply
    const response = await axios.post(url_replyList, {
      ...payload,
      createAt: new Date().toISOString(),
    });
    return response.data;
  }
);

export const asyncEditReply = createAsyncThunk(
  'replyList/editReply',
  async (payload, thunkAPI) => {
    // payload -> reply
    const response = await axios.put(url_replyList + `/${payload.id}`, payload);
    return response.data;
  }
);

export const asyncRemoveReply = createAsyncThunk(
  'replyList/removeReply',
  async (payload, thunkAPI) => {
    // payload -> reply id
    const response = await axios.delete(url_replyList + `/${payload}`);
    return payload;
  }
);

const initialState = {
  replyList: [],
  reply: [],
};

const replyList = createSlice({
  name: 'replyList',
  initialState,

  extraReducers: {
    [asyncGetOneReply.fulfilled]: (state, action) => {
      // action.payload -> reply
      state.reply = action.payload;
    },

    [asyncGetPostReply.fulfilled]: (state, action) => {
      // action.payload -> reply list by post id
      state.replyList = action.payload;
    },

    [asyncAddReply.fulfilled]: (state, action) => {
      // action.payload -> reply
      state.replyList.push(action.payload);
    },

    [asyncEditReply.fulfilled]: (state, action) => {
      // action.payload -> reply
      state.replyList = state.replyList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },

    [asyncRemoveReply.fulfilled]: (state, action) => {
      // action.payload -> id
      state.replyList = state.replyList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addReply, removeReply, editReply, getReply } = replyList.actions;
export default replyList.reducer;
