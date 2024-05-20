import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type DisplayMode = "rider" | "client" | "merchant" | "admin";

type Controls = {
  values: {
    showSingleProperty: boolean;
    showSearchProperty: boolean;
    showFavoriteProperty: boolean;
    showMyAdsProperty: boolean;
    showFormProperty: boolean;

  };
};

const initialState: Controls = {
  values: {
    showSingleProperty: false,
    showSearchProperty: false,
    showFavoriteProperty: false,
    showMyAdsProperty: false,
    showFormProperty: false,
  },
};

export const controlsSlice = createSlice({
  name: "controlsSlice",
  initialState,
  reducers: {
    updateControl: (state, action: PayloadAction<object>) => {
      state.values = { ...state.values, ...action.payload };
    },
    clearControls: () => {
      return initialState;
    },
  },
});

export const { updateControl, clearControls } = controlsSlice.actions;

export default controlsSlice.reducer;
