import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";
import ErrorContext from "../contexts/ErrorContext";
import { DialogContent, Box, Typography } from "@material-ui/core";
import Building from "./Building";
import Worker from "./Worker";

function SendWorkerActionContent({
  onClose,
  gameId,
  playerId,
  buildings,
  workers
}) {
  const showError = useContext(ErrorContext);
  const [buildingId, setBuildingId] = useState();
  const [workerId, setWorkerId] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.playAction(gameId, playerId, {
        type: "SEND_WORKER",
        workerId
      });
    } catch (e) {
      showError("Impossible d'effectuer cette action");
    }
    onClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Envoyer travailler un ouvrier</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" gutterBottom>
            Choisir un ouvrier
          </Typography>
          <Box display="flex" flexDirection="row" flexWrap="wrap" mb={1}>
            {workers.map(worker => (
              <Worker
                key={worker.id}
                {...worker}
                onClick={() => setWorkerId(worker.id)}
                active={worker.id === workerId}
              />
            ))}
          </Box>
          <Typography variant="subtitle1" gutterBottom>
            Choisir un bâtiment
          </Typography>
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
          <Button
            disabled={!workerId || !buildingId}
            type="submit"
            color="primary"
          >
            Valider
          </Button>
        </DialogActions>
      </form>
    </>
  );
}

export default SendWorkerActionContent;
