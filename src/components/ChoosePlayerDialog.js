import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText, Button, Box } from "@material-ui/core";
import range from "lodash/range";
import { Link } from "react-router-dom";

function ChoosePlayerDialog({ open, onClose }) {
  const game = open || {};
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle id="create-game-dialog-title">
        Rejoindre la partie : {game.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Vous êtes le joueur :</DialogContentText>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          mb={2}
          mt={1}
        >
          {range(game.players?.length).map(n => (
            <Link key={n} to={`/games/${game.id}/${n + 1}`}>
              <Button variant="contained" size="large" color="primary">
                Joueur {n + 1}
              </Button>
            </Link>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ChoosePlayerDialog;
