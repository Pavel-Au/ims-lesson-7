import React, { useEffect } from "react";
import { fetchCountries, removeCountry } from "../../store/countries/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { removeLanguage } from "../../store/countries/slice";
import { useNavigate } from "react-router-dom";

export default function Countries() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    !countries.length && dispatch(fetchCountries());
  }, []);

  const handleClick = (country) => {
    dispatch(removeLanguage());
    navigate(country.name.common);
  };

  return (
    <List>
      {countries &&
        countries.map((country, index) => (
          <ListItem key={index}>
            <Button onClick={() => handleClick(country)}>
              {country.flags.svg ? (
                <img
                  src={country.flags.svg}
                  alt={country?.name?.common}
                  height="20"
                />
              ) : null}
              <Typography ml={1} mr={2}>
                {country.name.official}
              </Typography>
            </Button>
            <Link to={country.name?.common}></Link>
            <Tooltip title="TBD: API doesn't support Delete">
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(removeCountry(country.name?.common))}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
    </List>
  );
}
