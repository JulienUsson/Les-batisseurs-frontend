import React from "react";
import { Box, Typography } from "@material-ui/core";

function Deck({ title, remainingCards, next, children }) {
  return (
    <Box mt={4} mb={4}>
      <Box mb={2}>
        <Typography variant="h5">
          {title} disponibles ({remainingCards} cartes restantes)
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {React.cloneElement(next, { disabled: true, title: "Carte suivante" })}
        {children}
      </Box>
    </Box>
  );
}

export default Deck;
