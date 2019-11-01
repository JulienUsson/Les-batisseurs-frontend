import React from "react";
import { makeStyles } from "@material-ui/styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Typography, Box, Paper, Tooltip } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    margin: theme.spacing(1),
    overflow: "hidden",
    height: 200,
    width: 160
  },
  buildingIcon: {
    fontSize: 80,
    color: theme.palette.grey[700]
  },
  wood: {
    backgroundColor: theme.palette.wood,
    color: theme.palette.common.white,
    height: theme.spacing(5),
    width: theme.spacing(5)
  },
  stone: {
    backgroundColor: theme.palette.stone,
    color: theme.palette.common.white,
    height: theme.spacing(5),
    width: theme.spacing(5)
  },
  knowledge: {
    backgroundColor: theme.palette.knowledge,
    color: theme.palette.common.white,
    height: theme.spacing(5),
    width: theme.spacing(5)
  },
  tile: {
    backgroundColor: theme.palette.tile,
    color: theme.palette.common.white,
    height: theme.spacing(5),
    width: theme.spacing(5)
  },
  coin: {
    backgroundColor: theme.palette.coin,
    color: theme.palette.common.white,
    height: theme.spacing(5),
    width: theme.spacing(5),
    position: "absolute",
    right: 0,
    top: 0,
    borderBottomLeftRadius: theme.shape.borderRadius
  },
  victoryPoint: {
    backgroundColor: theme.palette.victoryPoint,
    color: theme.palette.common.white,
    height: theme.spacing(5),
    width: theme.spacing(5),
    position: "absolute",
    left: 0,
    top: 0,
    borderBottomRightRadius: theme.shape.borderRadius
  },
  produced: {
    position: "absolute",
    margin: "auto",
    top: 0,
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius
  }
}));

function Building({
  reward,
  victoryPoint,
  stone,
  wood,
  knowledge,
  tile,
  stoneProduced,
  woodProduced,
  knowledgeProduced,
  tileProduced,
  done
}) {
  const classes = useStyles();
  const isEngine =
    stoneProduced > 0 ||
    woodProduced > 0 ||
    knowledgeProduced > 0 ||
    tileProduced > 0;

  return (
    <Paper className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Tooltip title="Points de victoire">
          <Box
            className={classes.victoryPoint}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6">{victoryPoint}</Typography>
          </Box>
        </Tooltip>
        {isEngine && (
          <Tooltip title="Ressource produite">
            <Box
              className={clsx(
                { [classes.wood]: woodProduced > 0 },
                { [classes.stone]: stoneProduced > 0 },
                { [classes.knowledge]: knowledgeProduced > 0 },
                { [classes.tile]: tileProduced > 0 },
                classes.produced
              )}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6">{victoryPoint}</Typography>
            </Box>
          </Tooltip>
        )}
        <Tooltip title="Ecus">
          <Box
            className={classes.coin}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6">{reward}</Typography>
          </Box>
        </Tooltip>
        <Box display="flex" flexGrow={1} alignItems="center">
          <AccountBalanceIcon className={classes.buildingIcon} />
        </Box>
        <Box display="flex" flexDirection="row">
          <Tooltip title="Bois">
            <Box
              className={classes.wood}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6" color="inherit">
                {wood}
              </Typography>
            </Box>
          </Tooltip>
          <Tooltip title="Pierre">
            <Box
              className={classes.stone}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6">{stone}</Typography>
            </Box>
          </Tooltip>
          <Tooltip title="Savoir">
            <Box
              className={classes.knowledge}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6">{knowledge}</Typography>
            </Box>
          </Tooltip>
          <Tooltip title="Tuile">
            <Box
              className={classes.tile}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6">{tile}</Typography>
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
}

export default Building;
