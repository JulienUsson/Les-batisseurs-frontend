import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box
} from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./scenes/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsDialog from "./components/SettingsDialog";
import BackendStatusIndicator from "./components/BackendStatusIndicator";
import Game from "./scenes/Game";

const useStyles = makeStyles(theme => ({
  "@global": {
    a: {
      textDecoration: "none"
    }
  },
  container: {
    marginTop: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Les Bâtisseurs - Moyen-Âge</Typography>
          <Box flex={1} />
          <Box mr={2}>
            <BackendStatusIndicator />
          </Box>
          <IconButton
            aria-label="Configure backend url"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/games/:id/:player" exact>
              <Game />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Container>

      <SettingsDialog open={open} onClose={() => setOpen(false)} />
    </ThemeProvider>
  );
}

export default App;
