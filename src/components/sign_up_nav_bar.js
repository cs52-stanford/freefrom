import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import logo from "./counselCompassLogo.png";
import "./sign_up.css";

const themeA = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#e06d4f",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  exitButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="false" disableGutters="true">
      <ThemeProvider theme={themeA}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Container>
              <img src={logo} className="logoImage"></img>
            </Container>

            <Button
              onClick={function () {
                props.setIsSignIn(true);
              }}
              color="secondary"
              className={classes.exitButton}
            >
              Exit
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Container>
  );
}
