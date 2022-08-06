import { configureStore } from "@reduxjs/toolkit";
import reply from "../modules/Reply";
import comment from "../modules/Comment";

const store = configureStore({
  reducer: {
		reply,
		comment
  },
});

export default store;