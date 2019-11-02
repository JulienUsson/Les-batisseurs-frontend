import React from "react";
import { DialogTitle, List, ListItem, ListItemText } from "@material-ui/core";

function SelectActionContent({ onActionSelect, game, player }) {
  function selectAction(type) {
    return () => {
      onActionSelect(type);
    };
  }

  return (
    <>
      <DialogTitle>Choisir une action</DialogTitle>
      <List>
        <ListItem
          button
          disabled={game.remainingWorkers === 0}
          onClick={selectAction("TAKE_BUILDING")}
        >
          <ListItemText primary="Ouvrir un chantier" />
        </ListItem>
        <ListItem
          button
          disabled={game.remainingBuildings === 0}
          onClick={selectAction("TAKE_WORKER")}
        >
          <ListItemText primary="Recruter un ouvrier" />
        </ListItem>
        <ListItem
          button
          disabled={
            player.availableWorkers.length === 0 ||
            player.underConstructionBuildings.length === 0
          }
          onClick={selectAction("SEND_WORKER")}
        >
          <ListItemText primary="Envoyer travailler un ouvrier" />
        </ListItem>
        <ListItem button onClick={selectAction("TAKE_MONEY")}>
          <ListItemText primary="Prendre un ou plusieurs écus" />
        </ListItem>
        <ListItem button onClick={selectAction("BUY_ACTION")}>
          <ListItemText primary="Acheter des actions supplémentaires" />
        </ListItem>
        <ListItem button onClick={selectAction("END_TURN")}>
          <ListItemText primary="Terminer mon tour" />
        </ListItem>
      </List>
    </>
  );
}

export default SelectActionContent;
