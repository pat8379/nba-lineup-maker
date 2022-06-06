import { configureStore } from "@reduxjs/toolkit";
import lineUpSlice from "../features/lineup/lineUpSlice";
import playersSlice from "../features/players/playersSlice";

export default configureStore({
    reducer: {
      lineUp: lineUpSlice,
      players: playersSlice
    },
  });