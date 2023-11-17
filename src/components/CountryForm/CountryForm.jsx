import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCountries } from "../../store/countries/thunks";
import Box from "@mui/material/Box";
import CountrySelector from "./CountrySelector";
import TranslationSelector from "./TranslationSelector";

export default function CountryForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const language = useSelector((state) => state.countries.language);
  const selectedCountry = useSelector((state) => state.countries.country);

  useEffect(() => {
    !countries.length && dispatch(fetchCountries());
  }, []);

  const handleClick = () => {
    let url = `/countries/${selectedCountry.name.common}`;
    if (language) {
      url += `?translate=${language}`;
    }
    navigate(url);
  };
  return countries ? (
    <>
      <Box sx={{ mb: 2 }}>
        <CountrySelector />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TranslationSelector disable={!selectedCountry} />
      </Box>
      <Grid container justifyContent="center">
        <Button
          onClick={handleClick}
          variant="contained"
          disabled={!selectedCountry}
        >
          Read more
          {selectedCountry ? ` about ${selectedCountry?.name?.common}` : ""}
        </Button>
      </Grid>
    </>
  ) : null;
}
