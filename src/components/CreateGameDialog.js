import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";

function CreateGameDialog({ open, onClose }) {
  const [name, setName] = React.useState("");
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(2);

  useEffect(() => {
    if (open) {
      setName("");
      setNumberOfPlayers(2);
    }
  }, [open]);

  function handleSubmit(e) {
    e.preventDefault();
    api.createGame({ name, numberOfPlayers });
    onClose();
  }

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="create-game-dialog-title">
          Créer une nouvelle partie
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Nom de la partie"
            type="text"
            margin="normal"
            defaultValue={name}
            onChange={e => setName(e.currentTarget.value)}
            fullWidth
            required
          />
          <TextField
            label="Nombre de joueurs"
            type="number"
            margin="normal"
            defaultValue={numberOfPlayers}
            onChange={e => setNumberOfPlayers(e.currentTarget.value)}
            fullWidth
            min={2}
            max={4}
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

export default CreateGameDialog;
