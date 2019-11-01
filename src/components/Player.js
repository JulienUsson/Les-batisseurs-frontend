import React from "react";
import { makeStyles } from "@material-ui/styles";
import Building from "./Building";
import Worker from "./Worker";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  coin: {
    color: theme.palette.coin
  }
}));

function Player({
  id,
  finishedBuildings,
  underConstructionBuildings,
  availableWorkers,
  money,
  victoryPoints,
  actions,
  isCurrent,
  isYou
}) {
  const classes = useStyles();

  return (
    <Box mt={4} mb={4}>
      <Box display="flex" flexDirection="row" alignItems="center" mb={2}>
        <Typography variant="h5">
          Joueur {id} {isYou && "(c'est toi !)"}
        </Typography>
        <Box flex={1} />
        <Typography className={classes.coin} variant="h6">
          {money} écus
        </Typography>
      </Box>
      {availableWorkers.length > 0 && (
        <Typography variant="subtitle1">Ouvriers disponibles</Typography>
      )}
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {availableWorkers.map(worker => (
          <Worker key={worker.id} {...worker} />
        ))}
      </Box>
      {underConstructionBuildings.length > 0 && (
        <Typography variant="subtitle1">Bâtiments en construction</Typography>
      )}
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {underConstructionBuildings.map(building => (
          <Building key={building.id} {...building} />
        ))}
      </Box>
      {finishedBuildings.length > 0 && (
        <Typography variant="subtitle1">Bâtiments terminés</Typography>
      )}
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {finishedBuildings.map(building => (
          <Building key={building.id} {...building} />
        ))}
      </Box>
    </Box>
  );
}

export default Player;
