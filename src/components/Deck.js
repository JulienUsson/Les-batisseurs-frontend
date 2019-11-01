import React from "react";
import { Box, Typography, Button, Tooltip } from "@material-ui/core";

function Deck({ title, remainingCards, next, children }) {
  return (
    <Box mt={4} mb={4}>
      <Box display="flex" flexDirection="row" mb={2}>
        <Typography variant="h5">
          {title} disponibles ({remainingCards} cartes restantes)
        </Typography>
        <Box flex={1} />
        <Tooltip title={next} placement="left-start">
          <Button color="primary">Voir la prochaine carte</Button>
        </Tooltip>
      </Box>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {children}
      </Box>
    </Box>
  );
}

export default Deck;
