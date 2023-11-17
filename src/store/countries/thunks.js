import { createAsyncThunk } from "@reduxjs/toolkit";
import { featureName } from "./constants";
import countriesService from "../../services/countries";

const fetchCountries = createAsyncThunk(
  `${featureName}/fetchCountries`,
  async () => {
    const response = await countriesService.get();
    return response;
  }
);

const fetchCountry = createAsyncThunk(
  `${featureName}/fetchCountry`,
  async (country) => {
    const response = await countriesService.getDetails(country);
    return response;
  }
);

const removeCountry = createAsyncThunk(
  `${featureName}/removeCountry`,
  async (country) => {
    const response = await countriesService.removeCountry(country);
    return response;
  }
);

export { fetchCountries, fetchCountry, removeCountry };
