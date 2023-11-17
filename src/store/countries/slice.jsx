import { createSlice } from "@reduxjs/toolkit";
import { featureName } from "./constants";
import { fetchCountries, fetchCountry, removeCountry } from "./thunks";

const initialState = {
  countries: [],
  country: null,
  language: null,
};

export const counterSlice = createSlice({
  name: featureName,
  initialState,
  reducers: {
    setCountry: (state, { payload }) => {
      if (state.countries.length && payload) {
        state.country = payload;
      } else {
        state.country = null;
      }
      state.language = null;
    },
    setLanguage: (state, { payload }) => {
      if (state.country && payload) {
        state.language = payload;
      } else {
        state.language = null;
      }
    },
    removeLanguage: (state) => {
      state.language = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
      })
      .addCase(fetchCountry.fulfilled, (state, { payload }) => {
        state.country = payload;
      })
      .addCase(removeCountry.fulfilled, (state, { payload }) => {
        state.countries = state.countries.filter(
          (country) => country.name.common !== payload
        );
      });
  },
});

export const { setCountry, setLanguage, removeLanguage } = counterSlice.actions;
export default counterSlice.reducer;
