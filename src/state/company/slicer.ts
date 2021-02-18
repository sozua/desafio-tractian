import { createSlice } from "@reduxjs/toolkit";

const companySlicer = createSlice({
  name: "company",
  initialState: {
    name: "",
    unities: [],
    users: [],
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    clearName(state) {
      state.name = "";
    },
    changeUnities(state, action) {
      state.unities = action.payload;
    },
    clearUnities(state) {
      state.unities = [];
    },
    changeUsers(state, action) {
      state.users = action.payload;
    },
    clearUsers(state) {
      state.users = [];
    },
  },
});

export const {
  changeName,
  clearName,
  changeUnities,
  clearUnities,
  changeUsers,
  clearUsers,
} = companySlicer.actions;

export const companyReducer = companySlicer.reducer;
