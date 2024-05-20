import { PropertyType } from "@/src/types/propertyType";
import { UserType } from "@/src/types/userType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  isAuthenticated: boolean;
  user: UserType | null;
};

type LoginPayload = {
  isAuthenticated: boolean;
  user: UserType;
};

let initialState: Auth = {
  isAuthenticated: false,
  user: null,
};



export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user
      return state;
    },
    logout: () => {
      return initialState;
    },
    isAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      return state;
    },
  },
});

export const { login, logout, isAuthenticated } = authSlice.actions;

export default authSlice.reducer;
