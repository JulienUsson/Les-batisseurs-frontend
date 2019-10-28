import React, { useEffect, useState } from "react";
import * as api from "../services/api";
import WifiOnIcon from "@material-ui/icons/Wifi";
import WifiOffIcon from "@material-ui/icons/WifiOff";

function BackendStatusIndicator() {
  const [status, setStatus] = useState(false);

  async function checkStatus() {
    setStatus(await api.getHealth());
  }

  useEffect(() => {
    checkStatus();
    const intervalId = setInterval(() => {
      checkStatus();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (status) {
    return <WifiOnIcon />;
  } else {
    return <WifiOffIcon />;
  }
}

export default BackendStatusIndicator;
