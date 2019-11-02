import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as api from "../services/api";
import ErrorContext from "../contexts/ErrorContext";
import {
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

function BuyActionActionContent({ onClose, gameId, playerId }) {
  const showError = useContext(ErrorContext);
  const [numberOfActions, setNumberOfActions] = useState("1");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.playAction(gameId, playerId, {
        type: "BUY_ACTION",
        numberOfActions: Number(numberOfActions)
      });
    } catch (e) {
      showError("Impossible d'effectuer cette action");
    }
    onClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Acheter des actions supplémentaires</DialogTitle>
        <DialogContent>
          <RadioGroup
            defaultValue={numberOfActions}
            onChange={e => setNumberOfActions(e.target.value)}
            row
          >
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              label="1"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="primary" />}
              label="2"
            />
            <FormControlLabel
              value="3"
              control={<Radio color="primary" />}
              label="3"
            />
          </RadioGroup>
        </DialogContent>
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

export default BuyActionActionContent;
