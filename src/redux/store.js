import { configureStore } from '@reduxjs/toolkit';
import baeReducer from './reducer/baeReducer';

export default configureStore({
  reducer: {
    baeReducer: baeReducer,
  },
});
