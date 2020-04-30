import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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
    textAlign: "left",
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    //flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={themeA}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography color="secondary" className={classes.root}>
              Civil Seeker
            </Typography>
            <Button
              onClick={function () {
                props.setIsSignIn(true);
              }}
              color="secondary"
              alignSelf="flex-end"
            >
              Exit
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
