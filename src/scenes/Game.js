import React, { useState, useEffect } from "react";
import { CircularProgress, Box } from "@material-ui/core";
import * as api from "../services/api";
import { useParams } from "react-router-dom";
import Player from "../components/Player";
import Worker from "../components/Worker";
import Building from "../components/Building";
import Deck from "../components/Deck";

function Game() {
  let { id, playerId } = useParams();
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
  }, [id]);

  if (!game) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress color="secondary" size={80} />
      </Box>
    );
  }

  const {
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
      {players.map(player => {
        return (
          <Player
            key={player.id}
            isYou={Number(playerId) === player.id}
            isCurrent={currentPlayer === player.id}
            {...player}
          />
        );
      })}
    </>
  );
}

export default Game;
