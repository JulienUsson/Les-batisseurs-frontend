import React, { useMemo } from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import orderBy from "lodash/orderBy";
import { Link } from "react-router-dom";

const medals = ["🥇", "🥈", "🥉", "😢"];

const useStyles = makeStyles(theme => ({
  medal: {
    fontSize: 48
  }
}));

function GameOver({ game, playerId }) {
  const classes = useStyles();
  const players = useMemo(() => {
    return orderBy(
      game.players.map(p => ({
        ...p,
        victoryPoints: p.victoryPoints,
        finishedBuildingsPoints: p.finishedBuildings.reduce(
          (acc, b) => acc + b.victoryPoint,
          0
        ),
        moneyPoints: p.money
      })),
      ["victoryPoints", "finishedBuildingsPoints", "moneyPoints"],
      ["desc", "desc", "desc"]
    );
  }, [game]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
    >
      <Typography variant="h3">Fin de la partie</Typography>
      <Box
        mt={8}
        mb={12}
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        {players.map((p, i) => (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography className={classes.medal}>{medals[i]}</Typography>
            <Typography variant="h6">
              Joueur {p.id} {playerId === p.id && "(c'est toi !)"}
            </Typography>
          </Box>
        ))}
      </Box>
      <Link to="/">
        <Button variant="contained" size="large" color="secondary">
          Retour au menu
        </Button>
      </Link>
    </Box>
  );
}

export default GameOver;
