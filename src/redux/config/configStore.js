import { configureStore } from "@reduxjs/toolkit";

import write from "../modules/write"

const store = configureStore({
  reducer:{
    write:write
  },
});

export default store