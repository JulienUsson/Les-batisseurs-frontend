import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import * as api from "../services/api";

function Home() {
  const [games, setGames] = useState([]);

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
    </>
  );
}

export default Home;
