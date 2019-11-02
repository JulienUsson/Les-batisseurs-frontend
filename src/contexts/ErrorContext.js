import React, { useState, useCallback } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";

const ErrorContext = React.createContext(() => {});

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  errorIcon: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

export function ErrorContextProvider({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const onClose = useCallback(() => {
    setOpen(false);
    setMessage(undefined);
  }, []);
  const displayError = useCallback(message => {
    setOpen(true);
    setMessage(message);
  }, []);

  return (
    <ErrorContext.Provider value={displayError}>
      <>
        {children}
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          autoHideDuration={6000}
          onClose={onClose}
        >
          <SnackbarContent
            className={classes.root}
            message={
              <span id="client-snackbar" className={classes.message}>
                <ErrorIcon className={clsx(classes.icon, classes.errorIcon)} />
                {message}
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={onClose}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>
            ]}
          />
        </Snackbar>
      </>
    </ErrorContext.Provider>
  );
}

export default ErrorContext;
