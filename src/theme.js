import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import yellow from "@material-ui/core/colors/yellow";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: { ...cyan, contrastText: "#fff" },
    secondary: yellow,
    wood: brown[500],
    stone: grey[500],
    knowledge: blue[500],
    tile: red[500],
    coin: yellow[700]
  }
});

export default theme;
