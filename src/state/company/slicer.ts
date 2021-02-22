import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssetProps, UnitProps, UserProps } from "../../utils/types";

type SliceProps = {
  name: string;
  units: UnitProps[];
  assets: AssetProps[];
  users: UserProps[];
  actualUser: UserProps;
};

const initialState: SliceProps = {
  name: "",
  units: [],
  assets: [],
  users: [],
  actualUser: {},
};

const companySlicer = createSlice({
  name: "company",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeUnits(state, action: PayloadAction<[]>) {
      state.units = action.payload;
    },
    changeAssets(state, action: PayloadAction<[]>) {
      state.assets = action.payload;
    },
    changeUsers(state, action: PayloadAction<UserProps[]>) {
      state.users = action.payload;
    },
    changeActualUser(state, action: PayloadAction<UserProps>) {
      state.actualUser = action.payload;
    },
  },
});

export const {
  changeName,
  changeUnits,
  changeAssets,
  changeUsers,
  changeActualUser,
} = companySlicer.actions;

export const companyReducer = companySlicer.reducer;
