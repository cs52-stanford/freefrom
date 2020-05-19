import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tool: {
    backgroundColor: "#e1f5fe",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#757575",
  },
  middleButton: {
    flexGrow: 3,
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 0.5,
    color: "#ff6f00",
  },
  matches: {
    color: "#757575",
  },
  Connections: {
    color: "#757575",
  },
  settings: {
    color: "#757575",
  },
  logout: {
    color: "#ff6f00",
  },
}));

export default function LawyerHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.tool}>
          <Typography variant="h4" className={classes.title}>
            Civil Seeker
          </Typography>
          <IconButton
            className={classes.middleButton}
            color="inherit"
          ></IconButton>
          <Button
            className={classes.home}
            id="home"
            onClick={function () {
              props.setIsHomeScreen(true);
              props.setIsConnectionsScreen(false);
              props.setIsSettingsScreen(false);
            }}
          >
            <Typography variant="h6" className={classes.matchestext}>
              Matches
            </Typography>
          </Button>
          <IconButton
            className={classes.middleButton}
            color="inherit"
          ></IconButton>
          <Button
            className={classes.Connections}
            id="Connections"
            onClick={function () {
              props.setIsHomeScreen(false);
              props.setIsConnectionsScreen(true);
              props.setIsSettingsScreen(false);
            }}
          >
            <Typography variant="h6" className={classes.Connectionstext}>
              Connections
            </Typography>
          </Button>
          <IconButton
            className={classes.middleButton}
            color="inherit"
          ></IconButton>
          <Button
            className={classes.settings}
            id="settings"
            onClick={function () {
              props.setIsHomeScreen(false);
              props.setIsConnectionsScreen(false);
              props.setIsSettingsScreen(true);
            }}
          >
            <Typography variant="h6" className={classes.settingstext}>
              Settings
            </Typography>
          </Button>
          <Button className={classes.logout} color={"inherit"}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
