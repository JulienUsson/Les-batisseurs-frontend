import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DEFAULT_BACKEND_URL = "http://localhost:3000";

function SettingsDialog({ open, onClose }) {
  const [backendUrl, setbackendUrl] = React.useState(
    localStorage.getItem("backend-url") || DEFAULT_BACKEND_URL
  );

  useEffect(() => {
    if (open) {
      setbackendUrl(localStorage.getItem("backend-url") || DEFAULT_BACKEND_URL);
    }
  }, [open]);

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("backend-url", backendUrl);
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="settings-dialog-title">Configuration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            N'oublier pas de configurer correctement l'URL du backend afin de
            pouvoir utiliser votre application.
          </DialogContentText>
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
