import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";
import ErrorContext from "../contexts/ErrorContext";

function EndTurnActionContent({ onClose, gameId, playerId }) {
  const showError = useContext(ErrorContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.playAction(gameId, playerId, { type: "END_TURN" });
    } catch (e) {
      showError("Impossible d'effectuer cette action");
    }
    onClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Terminer mon tour</DialogTitle>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button type="submit" color="primary">
            Valider
          </Button>
        </DialogActions>
      </form>
    </>
  );
}

export default EndTurnActionContent;
