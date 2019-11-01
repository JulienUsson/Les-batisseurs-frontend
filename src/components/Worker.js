import React from "react";
import { makeStyles } from "@material-ui/styles";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Typography, Box, Paper, Tooltip } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    margin: theme.spacing(1),
    overflow: "hidden",
    height: 200,
    width: 160
  },
  workerIcon: {
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
  }
}));

function Worker({ price, stone, wood, knowledge, tile }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
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
            justifyContent="center"
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

export default Worker;
