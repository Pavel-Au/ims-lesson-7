import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../../store/countries/thunks";
import { useParams, useSearchParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

export default function Country() {
  const [language, setLanguage] = useState(
    useSelector((state) => state.countries.language)
  );
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const countryData = useSelector((state) => state.countries.country);
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    setLanguage(language || searchParams.get("translate"));
    (!countryData || country !== countryData.name.common) &&
      dispatch(fetchCountry(country));
  }, []);

  const handleClick = () => {
    navigate(`/countries`);
  };

  return (
    <>
      <Grid container mb={5}>
        {countryData ? (
          <Typography variant="h3">
            {countryData.flags.svg ? (
              <img
                src={countryData.flags.svg}
                alt={countryData?.name?.common}
                width="50"
              />
            ) : null}
            {(language && countryData?.translations[language]?.official) ||
              countryData?.name?.official}
          </Typography>
        ) : null}
      </Grid>
      <Paper>
        {countryData ? (
          <List>
            <ListItem>
              <Tooltip title="TBD: API doesn't support Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <ListItemText primary={`Capital: ${countryData.capital[0]}`} />
            </ListItem>
            <ListItem>
              <Tooltip title="TBD: API doesn't support Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <ListItemText primary={`Population: ${countryData.population}`} />
            </ListItem>
          </List>
        ) : null}
        <Button
          onClick={handleClick}
          variant="outlined"
          startIcon={<ReplyIcon />}
          sx={{ m: 3 }}
          size="small"
        >
          Back to Countries
        </Button>
      </Paper>
    </>
  );
}
