import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";
import ErrorContext from "../contexts/ErrorContext";
import { DialogContent, Box } from "@material-ui/core";
import Worker from "./Worker";

function TakeWorkerActionContent({ onClose, gameId, playerId, workers }) {
  const showError = useContext(ErrorContext);
  const [workerId, setWorkerId] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.playAction(gameId, playerId, {
        type: "TAKE_WORKER",
        payload: {
          workerId
        }
      });
    } catch (e) {
      showError("Impossible d'effectuer cette action");
    }
    onClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Recruter un ouvrier</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {workers.map(worker => (
              <Worker
                key={worker.id}
                {...worker}
                onClick={() => setWorkerId(worker.id)}
                active={worker.id === workerId}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button disabled={!workerId} type="submit" color="primary">
            Valider
          </Button>
        </DialogActions>
      </form>
    </>
  );
}

export default TakeWorkerActionContent;
