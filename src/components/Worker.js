import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({}));

function Worker({ price, stone, wood, knowledge, tile }) {
  const classes = useStyles();

  return (
    <div>
      Pierre: {stone} Bois: {wood} Savoir: {knowledge} Tuile: {tile}
      Ecus: {price}
    </div>
  );
}

export default Worker;
