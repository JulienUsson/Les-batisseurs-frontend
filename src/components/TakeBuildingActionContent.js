import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";
import ErrorContext from "../contexts/ErrorContext";
import { DialogContent, Box } from "@material-ui/core";
import Building from "./Building";

function TakeBuildingActionContent({ onClose, gameId, playerId, buildings }) {
  const showError = useContext(ErrorContext);
  const [buildingId, setBuildingId] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.playAction(gameId, playerId, {
        type: "TAKE_BUILDING",
        buildingId
      });
    } catch (e) {
      showError("Impossible d'effectuer cette action");
    }
    onClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Ouvrir un chantiers</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {buildings.map(building => (
              <Building
                key={building.id}
                {...building}
                onClick={() => setBuildingId(building.id)}
                active={building.id === buildingId}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button disabled={!buildingId} type="submit" color="primary">
            Valider
          </Button>
        </DialogActions>
      </form>
    </>
  );
}

export default TakeBuildingActionContent;
