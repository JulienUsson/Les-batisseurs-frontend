import React from "react";
import theme from "./theme";
import { CssBaseline, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>Home</Typography>
    </ThemeProvider>
  );
}

export default App;
