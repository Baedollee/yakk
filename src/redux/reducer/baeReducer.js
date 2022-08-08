import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [{ title: '제목입니다!', contents: '컨텐츠입니다', done: false }],
  },
});

export default listSlice.reducer;
