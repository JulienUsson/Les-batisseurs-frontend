import React from "react";
import { makeStyles } from "@material-ui/styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles(theme => ({}));

function Building({
  reward,
  victoryPoint,
  stone,
  wood,
  knowledge,
  tile,
  stoneProduced,
  woodProduced,
  knowledgeProduced,
  tileProduced,
  done
}) {
  const classes = useStyles();
  const isEngine =
    stoneProduced > 0 ||
    woodProduced > 0 ||
    knowledgeProduced > 0 ||
    tileProduced > 0;

  return (
    <div>
      <AccountBalanceIcon />
      Pierre: {stone} Bois: {wood} Savoir: {knowledge} Tuile: {tile}
      Ecus: {reward} Point de victoire: {victoryPoint}
    </div>
  );
}

export default Building;
