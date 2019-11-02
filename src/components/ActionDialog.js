import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import SelectActionContent from "./SelectActionContent";
import EndTurnActionContent from "./EndTurnActionContent";
import BuyActionActionContent from "./BuyActionActionContent";

function ActionDialog({ open, onClose, game, playerId }) {
  const [type, setType] = useState();

  function handleClose() {
    onClose();
    setTimeout(() => {
      setType();
    }, 300);
  }

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      {(function() {
        switch (type) {
          case "TAKE_BUILDING":
            return null;
          case "TAKE_WORKER":
            return null;
          case "SEND_WORKER":
            return null;
          case "TAKE_MONEY":
            return null;
          case "BUY_ACTION":
            return (
              <BuyActionActionContent
                onClose={handleClose}
                gameId={game.id}
                playerId={playerId}
              />
            );
          case "END_TURN":
            return (
              <EndTurnActionContent
                onClose={handleClose}
                gameId={game.id}
                playerId={playerId}
              />
            );
          default:
            return <SelectActionContent onActionSelect={setType} />;
        }
      })()}
    </Dialog>
  );
}

export default ActionDialog;
