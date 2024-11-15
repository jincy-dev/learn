import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { text: string; lists: string[] } = {
  text: "",
  lists: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addText: (state, actions: PayloadAction<string>) => {
      state.text = actions.payload;
    },
    addList: (state, actions: PayloadAction<string>) => {
      state.lists.push(actions.payload);
    },
  },
});

export const { addList,addText } = listSlice.actions;
export default listSlice.reducer;
