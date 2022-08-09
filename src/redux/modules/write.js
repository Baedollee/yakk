import { createSlice } from '@reduxjs/toolkit';

const WRITE_TITLE = 'app/write/WRITE_TITLE';

const initialState = {
  list: [],
};

const createList = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getTitle(state, action) {
      state.list = action.payload;
    },
  },
});

// console.log('aaa', createList)

export default createList.reducer;
