import React from "react";
import { makeStyles } from "@material-ui/styles";
import Building from "./Building";
import Worker from "./Worker";

const useStyles = makeStyles(theme => ({}));

function Player({
  id,
  finishedBuildings,
  underConstructionBuildings,
  availableWorkers,
  money,
  victoryPoints,
  actions,
  current
}) {
  const classes = useStyles();

  return (
    <div>
      Joueur {id} Money: {money} Points de victoire: {victoryPoints}
      <div>
        {finishedBuildings.map(building => (
          <Building key={building.id} {...building} />
        ))}
      </div>
      <div>
        {underConstructionBuildings.map(building => (
          <Building key={building.id} {...building} />
        ))}
      </div>
      <div>
        {availableWorkers.map(worker => (
          <Worker key={worker.id} {...worker} />
        ))}
      </div>
    </div>
  );
}

export default Player;
