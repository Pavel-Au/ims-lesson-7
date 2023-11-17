import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.jsx";
import CountryDetailsRoute from "./routes/CountryDetailsRoute.jsx";
import CountriesRoute from "./routes/CountriesRoute.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import ErrorRoute from "./routes/ErrorRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeRoute />}></Route>
          <Route path="countries" element={<CountriesRoute />}></Route>
          <Route path="countries/:country" element={<CountryDetailsRoute />}></Route>
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
