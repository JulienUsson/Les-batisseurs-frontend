import React from "react";
import { makeStyles } from "@material-ui/styles";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Typography, Box, Paper, Tooltip } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    margin: theme.spacing(1),
    overflow: "hidden",
    height: 176,
    width: 176
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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  stone: {
    backgroundColor: theme.palette.stone,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  knowledge: {
    backgroundColor: theme.palette.knowledge,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  tile: {
    backgroundColor: theme.palette.tile,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  coin: {
    backgroundColor: theme.palette.coin,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
  disabledTitle
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {disabled && (
        <Tooltip title={disabledTitle}>
          <div className={classes.disabled} />
        </Tooltip>
      )}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Box display="flex" flexGrow={1} alignItems="center">
          <EmojiPeopleIcon className={classes.workerIcon} />
        </Box>
        <Tooltip title="Ecus">
          <Box
            className={classes.coin}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h6">{price}</Typography>
          </Box>
        </Tooltip>
        <Box display="flex" flexDirection="row">
          <Tooltip title="Bois">
            <Box
              className={classes.wood}
              display="flex"
              flexDirection="column"
              alignItems="center"
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
            >
              <Typography variant="h6">{tile}</Typography>
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
}

export default Worker;
