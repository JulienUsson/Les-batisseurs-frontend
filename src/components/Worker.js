import React from "react";
import { makeStyles } from "@material-ui/styles";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Typography, Box, Paper } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    margin: theme.spacing(1),
    overflow: "hidden",
    height: 176,
    width: 200
  },
  disabled: {
    position: "absolute",
    backgroundColor: theme.palette.action.disabled,
    zIndex: 100,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  workerIcon: {
    fontSize: 80,
    color: theme.palette.grey[700]
  },
  wood: {
    backgroundColor: theme.palette.wood,
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  stone: {
    backgroundColor: theme.palette.stone,
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  knowledge: {
    backgroundColor: theme.palette.knowledge,
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  tile: {
    backgroundColor: theme.palette.tile,
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  coin: {
    backgroundColor: theme.palette.coin,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    position: "absolute",
    right: 0,
    top: 0,
    borderBottomLeftRadius: theme.shape.borderRadius
  }
}));

function Worker({
  disabled,
  price,
  stone,
  wood,
  knowledge,
  tile,
  className,
  ...props
}) {
  const classes = useStyles();

  return (
    <Paper {...props} className={clsx(classes.root, className)}>
      {disabled && <div className={classes.disabled} />}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Box display="flex" flexGrow={1} alignItems="center">
          <EmojiPeopleIcon className={classes.workerIcon} />
        </Box>
        <Box
          className={classes.coin}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="button">{price}</Typography>
          <Typography variant="body2">Ecus</Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box
            className={classes.wood}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="button" color="inherit">
              {wood}
            </Typography>
            <Typography variant="body2" color="inherit">
              Bois
            </Typography>
          </Box>
          <Box
            className={classes.stone}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="button">{stone}</Typography>
            <Typography variant="body2">Pierre</Typography>
          </Box>
          <Box
            className={classes.knowledge}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="button">{knowledge}</Typography>
            <Typography variant="body2">Savoir</Typography>
          </Box>
          <Box
            className={classes.tile}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="button">{tile}</Typography>
            <Typography variant="body2">Tuile</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Worker;
