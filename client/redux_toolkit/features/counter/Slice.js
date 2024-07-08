import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
  name: "tip",
  initialState: {
    description: "",
  },
  reducers: {
    setDescription: (state,action) => {
      state.description = action.payload;
    },
    clearDescription: (state) => {
      state.description = "";
    }
  },
});

export const { setDescription,clearDescription } = tipSlice.actions;
export default tipSlice.reducer;
