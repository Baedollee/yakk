import { configureStore } from '@reduxjs/toolkit';
import baeReducer from '../reducer/baeReducer';
import rangReducer from '../reducer/rangReducer';

const store = configureStore({
  reducer: {
    reply: rangReducer,
    comment: baeReducer,
		devTools: process.env.NODE_ENV !== 'production',
  },
});

export default store;
