import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  page: number;
  data: any[];
  info: any;
  search: string;
  loading: boolean;
}

const initialState: CounterState = {
  page: 1,
  data: [],
  info: {},
  search: "",
  loading: false,
};

export const counterSlice = createSlice({
  name: "rickAndMorty",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setPage, setInfo, setLoading } = counterSlice.actions;

export default counterSlice.reducer;
