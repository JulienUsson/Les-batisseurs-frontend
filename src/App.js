import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  ThemeProvider,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./scenes/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(4)
    }
  })
);

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Les Bâtisseurs - Moyen-Âge</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
