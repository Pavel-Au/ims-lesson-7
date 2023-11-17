import React from "react";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledLink = styled(NavLink)({
  textDecoration: "none",
});

export default function Navigation() {
  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
      <Button component={StyledLink} to="/" variant="outlined">Home</Button>
      <Button component={StyledLink} to="/countries" variant="outlined">Countries</Button>
    </Stack>
  );
}
