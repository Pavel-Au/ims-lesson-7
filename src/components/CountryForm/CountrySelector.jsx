import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../../store/countries/slice";

const CountrySelector = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const country = useSelector((state) => state.countries.country);

  return (
    <Autocomplete
      onChange={(e, value) => dispatch(setCountry(value))}
      options={countries}
      value={country}
      getOptionLabel={(item) => `${item.name.common} (${item.capital[0]})`}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
};

export default CountrySelector;
