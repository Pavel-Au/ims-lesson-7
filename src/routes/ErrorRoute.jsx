import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Typography from "@mui/material/Typography";

export default function ErrorRoute() {
  return (
    <Typography variant="h4" component="h4" sx={{ color: "red" }}>
      <ErrorOutlineIcon fontSize="18px" sx={{ mr: 2 }} />
      Sorry, the page does not exist!
    </Typography>
  );
}
