import { configureStore } from "@reduxjs/toolkit";

import write from "../modules/write"
import baeReducer from "../reducer/baeReducer";
import rangReducer from '../reducer/rangReducer'

const store = configureStore({
  reducer:{
    write:write,
		reply: rangReducer,
		comment: baeReducer,
  },
});

export default store;