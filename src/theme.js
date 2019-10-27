import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: { ...cyan, contrastText: "#fff" },
    secondary: yellow
  }
});

export default theme;
