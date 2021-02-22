import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UnitProps, UserProps } from "../../utils/types";

type SliceProps = {
  name: string;
  units: UnitProps[];
  users: UserProps[];
  actualUser: number;
};

const initialState: SliceProps = {
  name: "",
  units: [],
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
    changeUnits(state, action: PayloadAction<[]>) {
      state.units = action.payload;
    },
    clearUnits(state) {
      state.units = [];
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
  changeUnits,
  clearUnits,
  changeUsers,
  clearUsers,
  changeActualUser,
  clearActualUser,
} = companySlicer.actions;

export const companyReducer = companySlicer.reducer;
