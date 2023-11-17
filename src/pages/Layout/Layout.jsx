import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <Container maxWidth="md">
      <Paper>
        <Header />
        <main>
          <Box p={4}>
            <Outlet />
          </Box>
        </main>
        <Footer />
      </Paper>
    </Container>
  );
};

export default Layout;
