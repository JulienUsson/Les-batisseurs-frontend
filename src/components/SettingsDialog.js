import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";

function SettingsDialog({ open, onClose }) {
  const [backendUrl, setbackendUrl] = React.useState(api.getBackendUrl());

  useEffect(() => {
    if (open) {
      setbackendUrl(api.getBackendUrl());
    }
  }, [open]);

  function handleSubmit(e) {
    e.preventDefault();
    api.setBackendUrl(backendUrl);
    onClose();
  }

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="settings-dialog-title">Configuration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="backend-url"
            label="Adresse URL du backend"
            type="text"
            defaultValue={backendUrl}
            onChange={e => setbackendUrl(e.currentTarget.value)}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button type="submit" color="primary">
            Enregistrer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default SettingsDialog;
