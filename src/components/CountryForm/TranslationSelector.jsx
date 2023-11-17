import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/countries/slice";

const TranslationSelector = ({ disable }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.countries.language);

  const translations = useSelector(
    (state) => state.countries?.country?.translations
  );

  return (
    <Autocomplete
      disabled={disable}
      onChange={(e, value) => dispatch(setLanguage(value))}
      value={language}
      options={Object.keys(translations || {})}
      renderInput={(params) => <TextField {...params} label="Language" />}
    />
  );
};

export default TranslationSelector;
