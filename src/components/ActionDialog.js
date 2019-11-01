import React from "react";
import Dialog from "@material-ui/core/Dialog";

function ActionDialog({ open, onClose, game }) {
  return <Dialog fullWidth open={open} onClose={onClose}></Dialog>;
}

export default ActionDialog;
