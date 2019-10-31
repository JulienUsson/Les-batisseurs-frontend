import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Box } from "@material-ui/core";
import * as api from "../services/api";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import Player from "../components/Player";
import Worker from "../components/Worker";
import Building from "../components/Building";
import Deck from "../components/Deck";

const useStyles = makeStyles(theme => ({}));

function Game() {
  const classes = useStyles();
  let { id, player } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    async function fetchGame() {
      try {
        const { data } = await api.findGameById(id);
        setGame(data);
      } catch (e) {
        setGame(null);
      }
    }
    fetchGame();
    const intervalId = setInterval(() => {
      fetchGame();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!game) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress color="secondary" size={80} />
      </Box>
    );
  }

  const {
    name,
    remainingWorkers,
    workers,
    nextWorker,
    remainingBuildings,
    nextBuilding,
    buildings,
    players,
    currentPlayer
  } = game;

  return (
    <>
      <Deck
        title="Ouvriers"
        remainingCards={remainingWorkers}
        next={<Worker {...nextWorker} />}
      >
        {workers.map(worker => (
          <Worker key={worker.id} {...worker} />
        ))}
      </Deck>
      <Deck
        title="Bâtiments"
        remainingCards={remainingBuildings}
        next={<Building disabled {...nextBuilding} />}
      >
        {buildings.map(building => (
          <Building key={building.id} {...building} />
        ))}
      </Deck>
      {players.map(player => (
        <Player
          key={player.id}
          current={currentPlayer === player.id}
          {...player}
        />
      ))}
    </>
  );
}

export default Game;
