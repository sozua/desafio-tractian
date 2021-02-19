import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UnityProps, UserProps } from "../../utils/types";

type SliceProps = {
  name: string;
  unities: UnityProps[];
  users: UserProps[];
  actualUser: number;
};

const initialState: SliceProps = {
  name: "",
  unities: [],
  users: [],
  actualUser: -1,
};

const companySlicer = createSlice({
  name: "company",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    clearName(state) {
      state.name = "";
    },
    changeUnities(state, action: PayloadAction<[]>) {
      state.unities = action.payload;
    },
    clearUnities(state) {
      state.unities = [];
    },
    changeUsers(state, action: PayloadAction<[]>) {
      state.users = action.payload;
    },
    clearUsers(state) {
      state.users = [];
    },
    changeActualUser(state, action: PayloadAction<number>) {
      state.actualUser = action.payload;
    },
    clearActualUser(state) {
      state.actualUser = -1;
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
  changeActualUser,
  clearActualUser,
} = companySlicer.actions;

export const companyReducer = companySlicer.reducer;
