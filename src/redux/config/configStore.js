import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../reducer/postSlice';
import replySlice from '../reducer/replySlice';

const store = configureStore({
  reducer: {
    reply: replySlice,
    comment: postSlice,
		devTools: process.env.NODE_ENV !== 'production',
  },
});

export default store;
