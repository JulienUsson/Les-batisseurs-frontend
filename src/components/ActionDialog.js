import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import SelectActionContent from "./SelectActionContent";
import EndTurnActionContent from "./EndTurnActionContent";
import BuyActionActionContent from "./BuyActionActionContent";
import TakeMoneyActionContent from "./TakeMoneyActionContent";
import TakeBuildingActionContent from "./TakeBuildingActionContent";
import TakeWorkerActionContent from "./TakeWorkerActionContent";
import SendWorkerActionContent from "./SendWorkerActionContent";

function ActionDialog({ open, onClose, game, playerId }) {
  const [type, setType] = useState();
  const player = game.players.find(p => p.id === playerId);

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
            return (
              <TakeBuildingActionContent
                onClose={handleClose}
                gameId={game.id}
                buildings={game.buildings}
                playerId={playerId}
              />
            );
          case "TAKE_WORKER":
            return (
              <TakeWorkerActionContent
                onClose={handleClose}
                gameId={game.id}
                workers={game.workers}
                playerId={playerId}
              />
            );
          case "SEND_WORKER":
            return (
              <SendWorkerActionContent
                onClose={handleClose}
                gameId={game.id}
                workers={player.availableWorkers}
                buildings={player.underConstructionBuildings}
                playerId={playerId}
              />
            );
          case "TAKE_MONEY":
            return (
              <TakeMoneyActionContent
                onClose={handleClose}
                gameId={game.id}
                playerId={playerId}
              />
            );
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
            return (
              <SelectActionContent
                game={game}
                player={player}
                onActionSelect={setType}
              />
            );
        }
      })()}
    </Dialog>
  );
}

export default ActionDialog;
