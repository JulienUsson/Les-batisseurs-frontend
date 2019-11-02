import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";

function EndTurnActionContent({ onClose, gameId, playerId }) {
  function handleSubmit(e) {
    e.preventDefault();
    api.playAction(gameId, playerId, { type: "END_TURN" });
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
          <Button type="submit" color="second">
            Valider
          </Button>
        </DialogActions>
      </form>
    </>
  );
}

export default EndTurnActionContent;
