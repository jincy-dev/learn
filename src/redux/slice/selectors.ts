import { RootState } from "../store";

export const selectList = (state: RootState) => state.list.lists;
export const selectText = (state: RootState) => state.list.text;
