import React, { useState, Suspense, lazy, useContext } from "react";
import { Box } from "@material-ui/core";
import { Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from "./Registration";
const Routes = () => {
  return (
    <BrowserRouter>
      <Box width="100%" minHeight="100vh">
        <Route path="/" element={<SuspenseFallback />}>
          <Route path="/registration" element={<RegistrationForm />} />
        </Route>
      </Box>
    </BrowserRouter>
  );
};
const SuspenseFallback = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Box width="100%" minHeight="100vh">
      {/* Routes will be rendered here */}
    </Box>
  </Suspense>
);
export default Routes;
