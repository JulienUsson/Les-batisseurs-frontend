import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Fab
} from "@material-ui/core";
import * as api from "../services/api";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import CreateGameDialog from "../components/CreateGameDialog";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  }
}));

function Home() {
  const classes = useStyles();
  const [games, setGames] = useState([]);
  const [openCreateGameDialog, setOpenCreateGameDialog] = React.useState(false);

  useEffect(() => {
    async function fetchGames() {
      try {
        const { data } = await api.findAllInProgressGame();
        setGames(data);
      } catch (e) {
        setGames([]);
      }
    }
    fetchGames();
    const intervalId = setInterval(() => {
      fetchGames();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Rejoindre une partie en cours
      </Typography>

      {games.length > 0 ? (
        <Paper>
          <List>
            {games.map(game => (
              <ListItem button>
                <ListItemText primary={game.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography variant="subtitle1">Aucune partie disponible</Typography>
      )}
      <Fab
        className={classes.fab}
        color="secondary"
        onClick={() => setOpenCreateGameDialog(true)}
      >
        <AddIcon />
      </Fab>
      <CreateGameDialog
        open={openCreateGameDialog}
        onClose={() => setOpenCreateGameDialog(false)}
      />
    </>
  );
}

export default Home;
