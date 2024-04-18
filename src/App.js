import React, { createContext, useState, useEffect } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routes from "./routes";
import { blue, indigo } from "@material-ui/core/colors";
import RegistrationForm from "./Registration";

export const appContext = createContext();

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
  },
});

const App = () => {
  const [requestsResponses, setRequestsResponses] = useState([]);

  return (
    <div style={{ background: "#f6f7fb" }}>
      <ThemeProvider theme={theme}>
        <RegistrationForm></RegistrationForm>
        <appContext.Provider
          value={{
            requestsResponses,
            setRequestsResponses,
          }}
        >
          {/* <Routes /> */}
        </appContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
