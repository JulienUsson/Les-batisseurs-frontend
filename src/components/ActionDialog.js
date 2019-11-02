import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import SelectActionContent from "./SelectActionContent";

function ActionDialog({ open, onClose, game }) {
  const [type, setType] = useState();

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
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
            return null;
          case "END_TURN":
            return null;
          default:
            return <SelectActionContent onActionSelect={setType} />;
        }
      })()}
    </Dialog>
  );
}

export default ActionDialog;
