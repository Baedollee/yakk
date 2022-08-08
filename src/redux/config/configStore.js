import { configureStore } from "@reduxjs/toolkit";

import write from "../modules/write"
import rangReducer from '../reducer/rangReducer'

const store = configureStore({
  reducer:{
    write:write,
		reply: rangReducer,
  },
});

export default store;